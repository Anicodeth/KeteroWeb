import React from "react";
import style from "./Pending.module.css";
import { CiPhone } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { Reservation } from "../../models/Reservation";
import { useQuery } from "react-query";
import { getService } from "@/services/ServiceServices";
import { getBusiness } from "@/services/BusinessService";


const Pending: React.FC = () => {
  const reservationData: Reservation[] = [
    {
      serviceId: "4364643",
      clientId: "34646346",
      businessId: "36346436",
      dateAndTime: "15:15" 
    },

    {
      serviceId: "4364643",
      clientId: "34646346",
      businessId: "36346436",
      dateAndTime: "15:15" 
    },

    {
      serviceId: "4364643",
      clientId: "34646346",
      businessId: "36346436",
      dateAndTime: "15:15" 
    },

    {
      serviceId: "4364643",
      clientId: "34646346",
      businessId: "36346436",
      dateAndTime: "15:15" 
    },

    {
      serviceId: "4364643",
      clientId: "34646346",
      businessId: "36346436",
      dateAndTime: "15:15" 
    },


  ];

  //TODO
  //fetch the user then iterate throught the pending array then fetch reservation date for each



  return (
    <div className={style.mainContainer}>
      <h1 className={style.mainHeader}>Pending Reservations</h1>

      <div className={style.reservationsContainer}>
        {reservationData.map((reservation, index) => (
          <ReservationCard key={index} reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

const ReservationCard: React.FC<{ reservation: Reservation }> = ({
  reservation,
}) => {
  const serviceId = reservation.serviceId;
  const businessId = reservation.businessId;

  const { data: service } = useQuery(["service", serviceId], () =>
    getService(serviceId)
  );
  const { data: business } = useQuery(["business", businessId], () =>
    getBusiness(businessId)
  );

  if (!service || !business) {
    return null; // or a loading placeholder
  }

  const serviceName = service.name;

  return (
    <div className={style.reservationCard}>
      <div className={style.reservationCardRow1}>
        <h1 className={style.serviceName}>{serviceName}</h1>
        <h1 className={style.serviceStatus}>Pending</h1>
      </div>

      <div className={style.reservationCardRow2}>
        <h1 className={style.companyName}>{business.businessName}</h1>
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
