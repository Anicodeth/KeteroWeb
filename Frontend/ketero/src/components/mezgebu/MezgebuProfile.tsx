import style from "./BusinessProfile.module.css";
import { FaMoneyBillTransfer, FaBookmark } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useMutation, useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { getPendingData } from "@/services/ReservationService";
import { addMezgebu, getBusiness } from "@/services/BusinessService";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { getService } from "@/services/ServiceServices";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";

const MezgebuProfile: React.FC = () => {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null;

  const { data: business } = useQuery("business", () => getBusiness(user._id));

  const revs = business?.reservations;
  const services = business?.services;
  

  if (!business) {
    return null;
  }

  return (
    <div className={style.clientContainer}>
      <div className={style.topNav}></div>
      <div className={style.headerContainer}>
        <div className={style.imageCard}>
          <Avatar className={style.agentImage}>
            <AvatarFallback>{user && user.ownerName}</AvatarFallback>
          </Avatar>
        </div>
        <div className={style.clientName}>
          <h3>{user && user.ownerName} </h3>
          <h3>{user && user.businessName} </h3>
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className={style.analysis}>
          <FaBookmark className={style.icon} />
          <h5>Confirmed Services</h5>
          <h4>5</h4>
        </div>
        <div className={style.analysis}>
          <FaMoneyBillTransfer className={style.icon} />
          <h5>Pending Services</h5>
          <h4>5</h4>
        </div>
      </div>
      <div className={style.hiredContainer}>
        <h2>Services Confirmed</h2>
        {revs && revs.length > 0 ? (
          <div className={style.hiredServices}>
            {revs.map((reservationId: string, index: any) => (
              <HiredServiceCard key={index} reservationId={reservationId} />
            ))}
          </div>
        ) : (
          <p>No confirmed services</p>
        )}
        <h2>Services Pending</h2>
        {revs && revs.length > 0 ? (
          <div className={style.hiredServices}>
            {revs.map((reservationId: string, index: any) => (
              <HiredServiceCard
                key={reservationId}
                reservationId={reservationId}
              />
            ))}
          </div>
        ) : (
          <p>No pending services</p>
        )}

        <h2>Services Offered</h2>
        {services && services.length > 0 ? (
          <div className={style.hiredServices}>
            {services.map((serviceId: string, index: any) => (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ServiceShadCard key={serviceId} serviceId={serviceId} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p>No services offered</p>
        )}
      </div>
    </div>
  );
};
const HiredServiceCard: React.FC<{ reservationId: string }> = ({
  reservationId,
}) => {
  const {
    data: reservationData,
    isLoading: isReservationLoading,
    isError: isReservationError,
  } = useQuery(["reservation", reservationId], () =>
    getPendingData(reservationId)
  );

  if (isReservationLoading) {
    return <SkeletonCard />;
  }

  if (isReservationError) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className={style.cardContainer}>
        <div className="flex flex-row items-center">
          <img
            className="bg-cover h-8 w-10"
            src={reservationData.imageUrl}
          ></img>
          <div className={style.serviceData}>
            <h3>{reservationData.serviceName}</h3>
            <h5>{reservationData.serviceDescription.slice(0, 10) + "..."}</h5>
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
  );
}

const ServiceShadCard: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const {
    data: service,
    isLoading,
    isError,
  } = useQuery(["service", serviceId], () => getService(serviceId));

  if (isLoading) {
    return <SkeletonCard />;
  }

  if (isError || !service) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="h-fit">
        <CardHeader>
          {service.imageUrl && (
            <div
              className="inset-0 bg-cover h-40 bg-center"
              style={{ backgroundImage: `url(${service.imageUrl})` }}
            ></div>
          )}
          <CardTitle>{service.name}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
          <CardDescription>{service.price}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};




export default MezgebuProfile;
