import style from "./ClientProfile.module.css";
import { Profile } from "../../assets";
import Image from "next/image";
import { IoMdArrowBack, IoMdShare } from "react-icons/io";
import { FaMoneyBillTransfer, FaBookmark } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { Service1, Service2, Service3 } from "../../assets";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from 'react'

interface HiredService {
  serviceImage: any;
  serviceName: string;
  companyAgent: string;
  servicePrice: string;
}

const hiredServiceData: HiredService[] = [
  {
    serviceImage: Service1,
    serviceName: "Service Name",
    companyAgent: "Company Agent Name",
    servicePrice: "400",
  },
  {
    serviceImage: Service2,
    serviceName: "Service Name",
    companyAgent: "Company Agent Name",
    servicePrice: "400",
  },
  {
    serviceImage: Service3,
    serviceName: "Service Name",
    companyAgent: "Company Agent Name",
    servicePrice: "400",
  },
];

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
      <div className={style.topNav}>

      </div>
      <div className={style.headerContainer}>
        <div className={style.imageCard}>
          {/* <Image
            className={style.agentImage}
            src={Profile}
            alt="Client Profile Photo"
            width={100}
            height={50}
          /> */}
          <Avatar className={style.agentImage}>
            <AvatarFallback>{user && user.name}</AvatarFallback>
          </Avatar>
        </div>
        <div className={style.clientName}>
          <h3>{user && user.name}</h3>
        </div>
      </div>

      <div className={style.miniDashboard}>
        <div className={style.analysis}>
          <FaBookmark className={style.icon} />
          <h5>Booked Services</h5>
          <h4>32</h4>
        </div>
        <div className={style.analysis}>
          <FaMoneyBillTransfer className={style.icon} />
          <h5>Total Transaction</h5>
          <h4>$1500</h4>
        </div>
        <div className={style.analysis}>
          <IoWallet className={style.icon} />
          <h5>Wallet Amount</h5>
          <h4>$500</h4>
        </div>
      </div>
      <div className={style.hiredContainer}>
        <h2>Services Hired</h2>
        <div className={style.hiredServices}>
          {hiredServiceData.map((service, index) => (
            <HiredServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
      <div className={style.walletRecharge}>
        <h3>Recharge Wallet</h3>
        <button className={style.btn}>Top-Up</button>
      </div>
    </div>
  );
};

const HiredServiceCard: React.FC<{ service: HiredService }> = ({ service }) => {
  return (
    <div className={style.cardContainer}>
      <Image
        className={style.serviceImage}
        src={service.serviceImage}
        alt="Service Image"
      />
      <div className={style.serviceData}>
        <h3>{service.serviceName}</h3>
        <h5>{service.companyAgent}</h5>
      </div>
      <h3>{service.servicePrice} ETB</h3>
    </div>
  );
};

export default ClientProfile;
