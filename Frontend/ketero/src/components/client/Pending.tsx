import React from 'react';
import style from './Pending.module.css';


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
          time: '2024-02-05T10:30:00',
          payment: '1500Birr',
          phone: '123-456-7890',
          status: 'Comfirmed',
        },
        {
          serviceName: 'Service 2',
          companyName: 'Company B',
          time: '2024-02-06T15:45:00',
          payment: '1500Birr',
          phone: '987-654-3210',
          status: 'Pending',
        },
        {
          serviceName: 'Service 3',
          companyName: 'Company C',
          time: '2024-02-07T12:00:00',
          payment: '1500Birr',
          phone: '555-123-4567',
          status: 'Pending',
        },
        {
          serviceName: 'Service 4',
          companyName: 'Company D',
          time: '2024-02-08T09:15:00',
          payment: '1500Birr',
          phone: '789-012-3456',
          status: 'Pending',
        },
        {
          serviceName: 'Service 5',
          companyName: 'Company E',
          time: '2024-02-09T17:30:00',
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
                <h1>{reservation.companyName}</h1>
            </div>

            <div className = {style.reservationCardRow3}>
                <div className = {style.cardBottomItem}>
                {reservation.time}
                </div>
                <div className = {style.cardBottomItem}>
                {reservation.phone}
                </div>
                <div className = {style.cardBottomItem}>
                {reservation.payment}
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