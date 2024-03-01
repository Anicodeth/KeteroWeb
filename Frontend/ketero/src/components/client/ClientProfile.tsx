import style from "./ClientProfile.module.css";
import { Profile } from "../../assets";
import Image from "next/image";
import { IoMdArrowBack, IoMdShare } from "react-icons/io";
import { FaMoneyBillTransfer, FaBookmark } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { Service1, Service2, Service3 } from "../../assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from 'react'
import { Service } from "@/models/Service";
import { getService } from "@/services/ServiceServices";
import {useQuery} from 'react-query'
import { getReservation } from "@/services/ReservationService";

const ClientProfile: React.FC = () => {
  const [user, setUser] = useState<any>(); 

  useEffect(()=>{
    const data = sessionStorage.getItem('user');
    if(data){
       setUser(JSON.parse(data));
    }

  }, [])
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
          <h4>{user && user.confirmed.length}</h4>
        </div>
        <div className={style.analysis}>
          <FaMoneyBillTransfer className={style.icon} />
          <h5>Pending Services</h5>
          <h4>{user && user.pending.length}</h4>
        </div>

      </div>
      <div className={style.hiredContainer}>
        <h2>Services Confirmed</h2>
        {user && user.confirmed.length > 0 ? (
          <div className={style.hiredServices}>
            {user.confirmed.map((service:any, index:any) => (
              <HiredServiceCard key={index} service={service} />
            ))}
          </div>
        ) : (
          <p>No confirmed services</p>
        )}
        <h2>Services Pending</h2>
        {user && user.pending.length > 0 ? (
          <div className={style.hiredServices}>
            {user.pending.map((service:any, index:any) => (
              <HiredServiceCard key={index} serviceId={service} />
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
const HiredServiceCard: React.FC<{ serviceId: any }> = ({ serviceId }) => {
  const { data: reservationData, isLoading: isReservationLoading, isError: isReservationError } = useQuery('reservation', () => getReservation(serviceId));

  const { data: serviceData, isLoading: isServiceLoading, isError: isServiceError } = useQuery(['service', reservationData?.data.serviceId], () => getService(reservationData?.data.serviceId));

  useEffect(() => {
    if (!isReservationLoading && !isReservationError && reservationData) {
      console.log(reservationData); 
    }
  }, [reservationData, isReservationLoading, isReservationError]);

  useEffect(() => {
    if (!isServiceLoading && !isServiceError && serviceData) {
      console.log(serviceData); 
    }
  }, [serviceData, isServiceLoading, isServiceError]);

  if (isReservationLoading || isServiceLoading) {
    return <div>Loading...</div>;
  }

  if (isReservationError || isServiceError) {
    return <div>Error loading service</div>;
  }

  return (
    <div className={style.cardContainer}>
      {/* Display service details */}
      <img  className = "bg-cover h-8" src = {serviceData.imageUrl}></img>
      <div className={style.serviceData}>
        <h3>{serviceData.name}</h3>
        <h5>{serviceData.description}</h5>
      </div>
      <h3>{serviceData.price} ETB</h3>
    </div>
  );
};
export default ClientProfile;
