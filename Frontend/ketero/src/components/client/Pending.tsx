import React from 'react';
import style from './Pending.module.css';
import { CiPhone } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";


interface Reservation {
    serviceName: string;
    companyName: string;
    time:string;
    payment:string;
    phone:string;
    status:string;
}

const Pending: React.FC = () => {
    const reservationData: Reservation[] = [
        {
          serviceName: 'Service 1',
          companyName: 'Company A',
          time: '10:30',
          payment: '1500Birr',
          phone: '123-456-7890',
          status: 'Comfirmed',
        },
        {
          serviceName: 'Service 2',
          companyName: 'Company B',
          time: '15:00',
          payment: '1500Birr',
          phone: '987-654-3210',
          status: 'Pending',
        },
        {
          serviceName: 'Service 3',
          companyName: 'Company C',
          time: '12:00',
          payment: '1500Birr',
          phone: '555-123-4567',
          status: 'Pending',
        },
        {
          serviceName: 'Service 4',
          companyName: 'Company D',
          time: '09:15',
          payment: '1500Birr',
          phone: '789-012-3456',
          status: 'Pending',
        },
        {
          serviceName: 'Service 5',
          companyName: 'Company E',
          time: '17:30',
          payment: '1500Birr',
          phone: '444-555-6666',
          status: 'Pending',
        },
      ];
    return (
            <div className = {style.mainContainer}>
                <h1 className = {style.mainHeader}>
                    Pending Reservations
                </h1>

                <div className = {style.reservationsContainer}>

            {

                reservationData.map((reservation, index) => ( 
                    <ReservationCard reservation = {reservation} />
                )
                )

            }

                
                
             </div>   
            </div>
    );
};

const ReservationCard: React.FC<{reservation: Reservation}> = ({reservation}) => {
    return (
        <div className = {style.reservationCard}>
            <div className = {style.reservationCardRow1}>
                <h1 className = {style.serviceName}>{reservation.serviceName}</h1>
                <h1  className = {style.serviceStatus}>{reservation.status}</h1>
            </div>       

            <div className = {style.reservationCardRow2}>
                <h1 className = {style.companyName}>{reservation.companyName}</h1>
            </div>

            <div className = {style.reservationCardRow3}>
                <div className = {style.cardBottomItem}>
                <CiTimer />{reservation.time}
                </div>
                <div className = {style.cardBottomItem}>
                <CiPhone />{reservation.phone}
                </div>
                <div className = {style.cardBottomItem}>
                <MdOutlinePayment /> {reservation.payment}
                </div>             
            </div>

            <div className = {style.buttonsContainer}>
                <button className = {style.buttonCard}> Cancel Reservation</button>
                <button className = {style.buttonCard}> Details</button>
            </div>
        </div>
    )
}
 


export default Pending;