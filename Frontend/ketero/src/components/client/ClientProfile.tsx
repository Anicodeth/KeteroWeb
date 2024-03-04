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
import { motion } from "framer-motion";

const ClientProfile: React.FC = () => {
  const user = JSON.parse(sessionStorage.getItem('user')!); 

  const { data: client } = useQuery("client", () => getClient(user._id));

  const pending = client?.pending;
  const confirmed = client?.confirmed;

  if(!client){
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

    <motion.div
    initial = {{ opacity: 0, x:-50}}
    animate = {{ opacity: 1, x: 0}}
    transition= {{ duration: 0.5, delay:0.1}}
    >
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
    </motion.div>
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
export default ClientProfile;
