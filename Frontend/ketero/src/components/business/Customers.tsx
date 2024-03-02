'use client'

import React from "react";
import style from "./Customers.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { useQuery } from "react-query";
import { getPendingData } from "@/services/ReservationService";
import { getBusiness } from "@/services/BusinessService";
import {Button} from "@/components/ui/button";


const Customers: React.FC = () => {

  const user = JSON.parse(sessionStorage.getItem('user')!);
  const [sumi, setSumi] = React.useState(0);

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
        <div className={[style.topCard].join(" ")}>
          <p>Pending Revenue</p>
          <p>{sumi}</p>
        </div>
      </div>
      <div id={style.customerComponent8}>
        <p>Upcoming Appointment</p>
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
            {confirmed.length} Customers <span>to Confirmed</span>
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

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(isError || !reservation) {
    return null;
  }

  const [date, time] = reservation.dateAndTime.split("T");

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
              <Button>Ready</Button>
              </div>
  )
}

export default Customers;