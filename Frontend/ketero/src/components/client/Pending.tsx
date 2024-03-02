import React from "react";
import style from "./Pending.module.css";
import { CiPhone } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { Reservation } from "../../models/Reservation";
import { useQuery } from "react-query";
import { getService } from "@/services/ServiceServices";
import { getBusiness } from "@/services/BusinessService";
import { getPendingData, getReservation } from "@/services/ReservationService";



const Pending: React.FC = () => {
  const reservationIds: string[] = [
    "4364643",
    "4364644",
    "4364645",
    "4364646",
    "4364647"
  ];

  return (
    <div className={style.mainContainer}>
      <h1 className={style.mainHeader}>Pending Reservations</h1>

      <div className={style.reservationsContainer}>
        {reservationIds.map((reservationId, index) => (
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
    return null; // or a loading placeholder
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
          {reservation.dateAndTime}
        </div>

        <div className={style.cardBottomItem}>
          <MdOutlinePayment /> {/* Add payment logic here */}
        </div>
      </div>

      <div className={style.buttonsContainer}>
        <button className={style.buttonCard}> Cancel Reservation</button>
        <button className={style.buttonCard}> Details</button>
      </div>
    </div>
  );
};

export default Pending;
