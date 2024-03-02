'use client'

import React, { useState } from "react";
import style from "./Customers.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { useQuery } from "react-query";
import { getPendingData } from "@/services/ReservationService";

interface Appointment {
  customer: string;
  status: string;
  time: string;
  payment: string;
  amount: string;
  phone: string;
}

const Customers: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Today");
  const appointmentData: Appointment[] = [
    {
      customer: "Ananya Fekeremariam",
      status: "Waiting",
      time: "09:34 AM",
      payment: "1500Birr",
      amount: "3 Services",
      phone: "+251 911909090",
    },
    {
      customer: "John Doe",
      status: "Confirmed",
      time: "10:00 AM",
      payment: "1200Birr",
      amount: "2 Services",
      phone: "+251 922345678",
    },
    {
      customer: "Jane Smith",
      status: "In Service",
      time: "11:30 AM",
      payment: "2000Birr",
      amount: "4 Services",
      phone: "+251 933456789",
    },
    {
      customer: "Mike Johnson",
      status: "Waiting",
      time: "01:00 PM",
      payment: "1800Birr",
      amount: "3 Services",
      phone: "+251 944567890",
    },
    {
      customer: "Emily Brown",
      status: "Confirmed",
      time: "02:30 PM",
      payment: "1500Birr",
      amount: "2 Services",
      phone: "+251 955678901",
    },
    {
      customer: "Daniel White",
      status: "In Service",
      time: "04:00 PM",
      payment: "2500Birr",
      amount: "5 Services",
      phone: "+251 966789012",
    },
    {
      customer: "Sophia Miller",
      status: "Waiting",
      time: "05:30 PM",
      payment: "2000Birr",
      amount: "4 Services",
      phone: "+251 977890123",
    },
    {
      customer: "William Davis",
      status: "Confirmed",
      time: "07:00 PM",
      payment: "1800Birr",
      amount: "3 Services",
      phone: "+251 988901234",
    },
    {
      customer: "Olivia Wilson",
      status: "In Service",
      time: "08:30 PM",
      payment: "3000Birr",
      amount: "6 Services",
      phone: "+251 999012345",
    },
    {
      customer: "Ethan Anderson",
      status: "Waiting",
      time: "10:00 PM",
      payment: "2200Birr",
      amount: "4 Services",
      phone: "+251 9101234567",
    },
  ];

  return (
    <div className={[style.customerComponent].join(" ")}>

      <div id={style.customerComponent2}>
        <p className={[style.goodMorning].join(" ")}>Good morning!</p>
        <p className={[style.ownerName].join(" ")}>Owner's Name</p>
      </div>

      <div className={[].join(" ")} id={style.customerComponent6}>
        <div className={[style.topCard, style.unselectedTopCard].join(" ")}>
          <p>Pending Orders</p>
          <p>30</p>
        </div>
        <div className={[style.topCard].join(" ")}>
          <p>Pending Revenue</p>
          <p>3000 ETB</p>
        </div>
      </div>
      <div id={style.customerComponent8}>
        <p>Upcoming Appointment</p>
      </div>

      <div
        className={[style.appointmentCards].join(" ")}
        id={style.customerComponent9}
      >
         {pending.map((reservationId:string, index:number)=> (
              <ReservationCard key={index} reservationId={reservationId} />
        ))} 

      </div>
      <div
        className={[style.taskCard].join(" ")}
        id={style.customerComponent10}
      >
        <div>
          <FcTodoList />
          <p>
            1 Customers <span>to Confirmed</span>
          </p>
        </div>
        <div>
          <FcTodoList />
          <p>
            4 Customers <span>in Pending</span>
          </p>
        </div>

      </div>
    </div>
  );
};

function ReservationCard( reservationId: string) {


  const {data: reservation, isLoading, isError} = useQuery(["reservation", reservationId], () =>
    getPendingData(reservationId)
  );

  if(isLoading) {
    return <div>Loading...</div>
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
                <p>{reservation.dateAndTime}</p>
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
              <button>Ready</button>
              </div>
  )
}

export default Customers;