import style from "./ClientProfile.module.css";
import { FaMoneyBillTransfer, FaBookmark } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useEffect, useState } from 'react'
import { getService } from "@/services/ServiceServices";
import {useQuery} from 'react-query'
import { getReservation } from "@/services/ReservationService";
import { Skeleton } from "@/components/ui/skeleton"

import {getClient} from "@/services/ClientService";
import { getPendingData } from "@/services/ReservationService";
import { getBusiness } from "@/services/BusinessService";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const BusinessProfile: React.FC = () => {
  const user = JSON.parse(sessionStorage.getItem('user')!); 

  const { data: business } = useQuery("business", () => getBusiness(user._id));

  const pending = business?.pending;
  const confirmed = business?.confirmed;
  const services = business?.services;

  if(!business){
    return null
  }
  

  return (
    <div className={style.clientContainer}>
      <div className={style.topNav}></div>
      <div className={style.headerContainer}>
        <div className={style.imageCard}>
          <Avatar className={style.agentImage}>
            <AvatarFallback>{user && user.name}</AvatarFallback>
          </Avatar>
        </div>
        <div className={style.clientName}>
          <h3>{user && user.name}</h3>
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className={style.analysis}>
          <FaBookmark className={style.icon} />
          <h5>Booked Services</h5>
          <h4>{confirmed && confirmed.length}</h4>
        </div>
        <div className={style.analysis}>
          <FaMoneyBillTransfer className={style.icon} />
          <h5>Pending Services</h5>
          <h4>{pending && pending.length}</h4>
        </div>

      </div>
      <div className={style.hiredContainer}>
        <h2>Services Confirmed</h2>
        {confirmed && confirmed.length > 0 ? (
          <div className={style.hiredServices}>
            {confirmed.map((reservationId:string, index:any) => (
              <HiredServiceCard key={reservationId} reservationId={reservationId} />
            ))}
          </div>
        ) : (
          <p>No confirmed services</p>
        )}
        <h2>Services Pending</h2>
        {pending && pending.length > 0 ? (
          <div className={style.hiredServices}>
            {pending.map((reservationId:string, index:any) => (
              <HiredServiceCard key={reservationId} reservationId={reservationId} />
            ))}
          </div>
        ) : (
          <p>No pending services</p>
        )}
      </div>
      <h2>Services Offered</h2>
      {services && services.length > 0 ? (
        <div className={style.hiredServices}>
          {services.map((serviceId:string, index:any) => (
            <ServiceShadCard key={serviceId} serviceId={serviceId} />
          ))}
        </div>
      ) : (
        <p>No services offered</p>
      )}
      {/* <div className={style.walletRecharge}>
        <h3>Recharge Wallet</h3>
        <button className={style.btn}>Top-Up</button>
      </div> */}
    </div>
  );
};
const HiredServiceCard: React.FC<{ reservationId: string }> = ({ reservationId }) => {

  const { data: reservationData, isLoading: isReservationLoading, isError: isReservationError } = useQuery(["reservation", reservationId], () => getPendingData(reservationId));

  if (isReservationLoading) {
    return <SkeletonCard />
    ;
  }

  if (isReservationError ) {
    return null;
  }


  return (
    <div className={style.cardContainer}>
      {/* Display service details */}
      <div className = "flex flex-row items-center"> 
      <img  className = "bg-cover h-8 w-10" src = {reservationData.imageUrl}></img>
      <div className={style.serviceData}>
        <h3>{reservationData.serviceName}</h3>
        <h5>{(reservationData.serviceDescription).slice(0, 10) + "..."}</h5>
      </div>
      </div>


      <h3>{reservationData.servicePrice} ETB</h3>
    </div>
  );
};


export function SkeletonCard() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}


const ServiceShadCard: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const { data: service, isLoading, isError } = useQuery(["service", serviceId], () => getService(serviceId));

  if (isLoading) {
    return <SkeletonCard />;
  }
  
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="inset-0 bg-cover h-40 bg-center" style={{ backgroundImage: `url(${service.imageUrl})` }}></div>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
        <CardDescription>{service.price}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BusinessProfile;
