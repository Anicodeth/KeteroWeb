'use client'

import React from "react";
import style from "./Customers.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { confirmReservation, getPendingData } from "@/services/ReservationService";
import { getBusiness } from "@/services/BusinessService";
import {Button} from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FallingLines } from "react-loader-spinner";
import { Skeleton } from "../ui/skeleton";

const Customers: React.FC = () => {

  const user = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user')!) : null;

  const {data: business, isLoading} = useQuery("business", () => getBusiness(user._id));
  
  if(isLoading) {
    return <div className = "h-full w-full flex items-center justify-center">
    <FallingLines
      color="#700F14"
      width="100"
      visible={true}
  /></div>
  }


  const pending = business?.pending;
  const confirmed = business?.confirmed;

  return (
    <div className={[style.customerComponent].join(" ")}>

      <div id={style.customerComponent2}>
        <p className={[style.goodMorning].join(" ")}>Good Workday!</p>
        <p className={[style.ownerName].join(" ")}> Hey, {business.ownerName}</p>
      </div>

      <div className={[].join(" ")} id={style.customerComponent6}>
        <div className={[style.topCard, style.unselectedTopCard].join(" ")}>
          <p>Pending Orders</p>
          <p>{pending.length}</p>
        </div>

      </div>
      <div id={style.customerComponent8}>
        <p>Pending Reservations</p>
      </div>

      <div
        className={[style.appointmentCards].join(" ")}
        id={style.customerComponent9}
      >
         {pending.map((reservationId:string, index:any)=> (
              <motion.div
              initial = {{ opacity: 0, x:-50}}
              animate = {{ opacity: 1, x: 0}}
              transition= {{ duration: 0.5, delay:0.1}}
              >
                <ReservationCard reservationId={reservationId} />
              </motion.div>
        ))
        
        } 

      </div>
      <div
        className={[style.taskCard].join(" ")}
        id={style.customerComponent10}
      >
        <div>
          <FcTodoList />
          <p>
            {confirmed.length} Customers <span>Confirmed</span>
          </p>
        </div>
        <div>
          <FcTodoList />
          <p>
            {pending.length} Customers <span>in Pending</span>
          </p>
        </div>

      </div>
    </div>
  );
};

const ReservationCard:React.FC<{reservationId:string}> = ({reservationId}) => {

  const {data: reservation, isLoading, isError} = useQuery(["reservation", reservationId], () =>
    getPendingData(reservationId)
  );

  const queryClient = useQueryClient();
  const confirmMutation = useMutation(() => confirmReservation(reservationId), {
    onSuccess: () => {
      toast("Reservation confirmed");
      queryClient.invalidateQueries("reservations")
    }
  })

  if(isLoading) {
    return <SkeletonCard></SkeletonCard>
  }

  if(isError || !reservation) {
    return null;
  }




  const [date, time] = reservation.dateAndTime.split("T");

  async function handleConfirm() {
  
   await confirmMutation.mutateAsync();
    }

  return (
    <div className={[style.appointmentCard].join(" ")}>
              <p>{reservation.clientName}</p>
              <div className={[style.situation].join(" ")}>
                <IoIosNotificationsOutline color="#DE3B40" />
                <p>Pending</p>
              </div>
              <hr />
              <div>
                <IoIosNotificationsOutline />
                <p className = "text-xs">{(date)}</p> 
              </div>
              <div>
                <IoIosNotificationsOutline />
                <p className = "text-xs">{(time).split('.')[0]}</p> 
              </div>
              <div>
                <IoIosNotificationsOutline />
                <p>{reservation.serviceName}</p>
              </div>
              <div>
                <IoIosNotificationsOutline />
                <p>{reservation.clientPhone}</p>
              </div>
              <div>
                <IoIosNotificationsOutline />
                <p>{reservation.servicePrice}</p>
              </div>
              <hr />
              <Button onClick = {()=>handleConfirm()}>{confirmMutation.isLoading ? "Confirming...": "Confirm"}</Button>
              </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-full">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}


export default Customers;