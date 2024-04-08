import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import style from "./Businesses.module.css";
import { useQuery } from "react-query";
import { getMezgebuBusinesses } from "../../services/MezgebuService";
import { Business } from "@/models/Business";

const Businesses: React.FC = () => {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null;

  const {
    data: businesses,
    isLoading: isBusinessesLoading,
    error: businessesError,
  } = useQuery("businesses", () => getMezgebuBusinesses(user._id));
  return (
    <div className={style.wrapper}>
      <h1 className={style.h1}>All businesses we have</h1>
      {isBusinessesLoading ? (
        <p>Loading....</p>
      ) : businessesError ? (
        <p>Error {businessesError as string}</p>
      ) : (
        <div className={style.listCard}>
          {businesses.map((business:any) => (
            <BusinessCard key={business.id} business={business}></BusinessCard>
          ))}
        </div>
      )}
    </div>
  );
};



const BusinessCard: React.FC<{business:Business}> = ({business}) => {
  return (
    <div className={style.card}>
      <div className={[style.colSpan].join("")}>
        <h2 className={style.h2}>{business.businessName}</h2>
        <hr className={style.hr} />
      </div>
      <div className={[style.horizontal].join("")}>
        <FaUserTie /> <p>{business.ownerName}</p>
      </div>

      <div className={[style.horizontal].join("")}>
        <FaEnvelope /> <p>{business.email}</p>
      </div>
      {/* <div className={[style.horizontal].join("")}>
        <FaLock /> <p>{business.password}</p>
      </div> */}
      <div className={[style.horizontal].join("")}>
        <FaPhone /> <p>{business.phone}</p>
      </div>
    </div>
  );
};

export default Businesses;
