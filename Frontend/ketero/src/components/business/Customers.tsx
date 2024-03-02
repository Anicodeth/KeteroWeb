'use client'

import React from "react";
import style from "./Customers.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { confirmReservation, getPendingData } from "@/services/ReservationService";
import { getBusiness } from "@/services/BusinessService";
import {Button} from "@/components/ui/button";


const Customers: React.FC = () => {

  const user = JSON.parse(sessionStorage.getItem('user')!);

  const {data: business, isLoading} = useQuery("business", () => getBusiness(user._id));
  
  if(isLoading) {
    return <div>Loading...</div>
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
              <ReservationCard reservationId={reservationId} />
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
      queryClient.invalidateQueries("reservations")
    }
  })

  if(isLoading) {
    return <div>Loading...</div>
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
              <Button onClick = {()=>handleConfirm()}>Confirm</Button>
              </div>
  )
}

export default Customers;