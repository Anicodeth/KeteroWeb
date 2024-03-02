import React from "react";
import style from "./Pending.module.css";
import { CiTimer } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { useQuery } from "react-query";
import { getPendingData } from "@/services/ReservationService";
import { Button } from "@/components/ui/button";



const Pending: React.FC = () => {
  const user = JSON.parse(sessionStorage.getItem("user")!);
  const reservationIds = user.pending;

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
  const { data: reservation } = useQuery(["reservation", reservationId], () =>
    getPendingData(reservationId)
  );
  
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
        <Button className={style.buttonCard}> Cancel</Button>
        <Button className={style.buttonCard}> Details</Button>
      </div>
    </div>
  );
};

export default Pending;
