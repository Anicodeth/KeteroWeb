import React from "react";
import style from "./Pending.module.css";
import { CiTimer } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { useQuery } from "react-query";
import { getPendingData } from "@/services/ReservationService";
import { Button } from "@/components/ui/button";
import { getClient } from "@/services/ClientService";
import { Skeleton } from "@/components/ui/skeleton";
import { deleteReservation } from "@/services/ReservationService";



const Pending: React.FC = () => {
  const user = JSON.parse(sessionStorage.getItem("user")!);
  const clientId = user._id;
  const { data: client } = useQuery(["client", clientId], () => getClient(clientId));

  
  if (!client || !client.pending) {
    return null; // or a loading placeholder
  }

  const reservationIds = client.pending;

  return (
    <div className={style.mainContainer}>
      <h1 className={style.mainHeader}>Pending Reservations</h1>

      <div className={style.reservationsContainer}>
        {reservationIds.map((reservationId:any, index:any) => (
          <ReservationCard key={index} reservationId={reservationId} />
        ))}
      </div>
    </div>
  );
};

const ReservationCard: React.FC<{ reservationId: string }> = ({ reservationId }) => {
  const { data: reservation, isLoading, isError } = useQuery(["reservation", reservationId], () =>
    getPendingData(reservationId)
  );

  function handleDelete(id: string) {
    console.log(id);
  }

  if(isLoading){
    return <SkeletonCard />
  }

  if(isError){
    return <div>Error</div>
  }
  
  if (!reservation) {
    return null; 
  }

  return (
    <div className={style.reservationCard}>
      <div className={style.reservationCardRow1}>
        <h1 className={style.serviceName}>{reservation.serviceName}</h1>
        <h1 className={style.serviceStatus}>Pending</h1>
      </div>

      <div className={style.reservationCardRow2}>
        <h1 className={style.companyName}>{reservation.businessName}</h1>
      </div>

      <div className={style.reservationCardRow3}>
        <div className={style.cardBottomItem}>
          <CiTimer />
          {(reservation.dateAndTime as string).slice(0, 10) + "..."}
        </div>

        <div className={style.cardBottomItem}>
          <MdOutlinePayment /> 
          {reservation.businessEmail}
        </div>
      </div>

      <div className={style.buttonsContainer}>
        <Button onClick = {()=>{handleDelete(reservationId)}} className={style.buttonCard}> Cancel</Button>
        {/* <Button className={style.buttonCard}> Details</Button> */}
      </div>
    </div>
  );
};


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


export default Pending;
