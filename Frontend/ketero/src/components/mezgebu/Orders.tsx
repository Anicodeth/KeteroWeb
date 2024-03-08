import React from "react";
import style from "./Orders.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { useMutation, useQuery } from "react-query";
import {
  confirmReservation,
  getPendingData,
} from "@/services/ReservationService";
import { getMezgebu, getMezgebus } from "@/services/MezgebuService";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Skeleton } from "../ui/skeleton";

const Orders: React.FC = () => {
  const mezgebu =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null;

  //get fresh data
  const { data: mezgebuData, isLoading } = useQuery("mezgebu", () => getMezgebu(mezgebu._id));

  if (!mezgebuData) {
    return null;
  }

  if(isLoading){
    return <SkeletonCard />
  }

  const reservations = mezgebuData?.reservations;

  return (
    <div className={[style.customerComponent].join(" ")}>
      <div id={style.customerComponent2}>
        <p className={[style.goodMorning].join(" ")}>Good Workday!</p>
        <p className={[style.ownerName].join(" ")}>Hey, {mezgebu.name}</p>
      </div>

      <div className={[].join(" ")} id={style.customerComponent6}>
        <div className={[style.topCard, style.unselectedTopCard].join(" ")}>
          <p>Pending Orders</p>
          <p>5</p>
        </div>
      </div>
      <div id={style.customerComponent8}>
        <p>Pending Reservations</p>
      </div>

      <div
        className={[style.appointmentCards].join(" ")}
        id={style.customerComponent9}
      >
        {reservations.map((reservationId: string, index: any) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ReservationCard reservationId={reservationId} confirmed={false} />
          </motion.div>
        ))}
      </div>
      <div
        className={[style.taskCard].join(" ")}
        id={style.customerComponent10}
      >
        <div>
          <FcTodoList />
          <p>
            5 Customers <span>Confirmed</span>
          </p>
        </div>
        <div>
          <FcTodoList />
          <p>
            5 Customers <span>in Pending</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const ReservationCard: React.FC<{
  reservationId: string;
  confirmed: boolean;
}> = ({ reservationId, confirmed }) => {
  const {
    data: reservation,
    isLoading,
    isError,
  } = useQuery(["reservation", reservationId], () =>
    getPendingData(reservationId)
  );

  const confirmMutation = useMutation(() => confirmReservation(reservationId), {
    onSuccess: () => {
      toast("Reservation confirmed");
      // queryClient.invalidateQueries("reservations");
    },
  });

  if (isLoading) {
    return <SkeletonCard />;
  }

  if (isError || !reservation) {
    return null;
  }

  if (reservation.confirmed !== confirmed) {
    return null;
  }

  const [date, time] = reservation.dateAndTime.split("T");

  async function handleConfirm() {
    await confirmMutation.mutateAsync();
  }

  return (
    <div className={[style.appointmentCard].join(" ")}>
      <p>{reservation.clientName}</p>
      <div className={[style.situation].join(" ")}>
        <IoIosNotificationsOutline color="#DE3B40" />
        <p>Pending</p>
      </div>
      <hr />
      <div>
        <IoIosNotificationsOutline />
        <p className="text-xs">{date}</p>
      </div>
      <div>
        <IoIosNotificationsOutline />
        <p className="text-xs">{time.split(".")[0]}</p>
      </div>
      <div>
        <IoIosNotificationsOutline />
        <p>{reservation.serviceName}</p>
      </div>
      <div>
        <IoIosNotificationsOutline />
        <p>{reservation.clientPhone}</p>
      </div>
      <div>
        <IoIosNotificationsOutline />
        <p>{reservation.servicePrice}</p>
      </div>
      <hr />
      <Button onClick={() => handleConfirm()}>
        {confirmMutation.isLoading ? "Confirming..." : "Confirm"}
      </Button>
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
  );
}

export default Orders;
