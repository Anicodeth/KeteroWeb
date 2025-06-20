"use client";

import React, { useState } from "react"; // Import useState from React
import style from "@/app/business/Business.module.css";
import { FaHome, FaPlus, FaUser } from "react-icons/fa";
import MezgebuProfile from "@/components/mezgebu/MezgebuProfile";
import Orders from "@/components/mezgebu/Orders";
import AddMezgebService from "@/components/mezgebu/AddMezgebService";
import { FaBusinessTime } from "react-icons/fa";
import Businesses from "@/components/mezgebu/Businesses";


const Mezgebu: React.FC = () => {
  const [toggle, setToggle] = useState<string>("Pending");

  const handleClick = (activity: string) => {
    setToggle(activity);
  };

  return (
    <div className={style.activityContainer}>
      <div className={style.activeWindow}>
        {toggle === "Pending" ? <Orders /> : ""}
        {toggle === "Profile" ? <MezgebuProfile /> : ""}
        {toggle === "Service" ? <AddMezgebService /> : ""}
        {toggle === "Businesses" ? <Businesses/> : ""}
      </div>

      <div className={style.bottomNav}>
        <button
          className={style.bottomNavButton}
          onClick={() => handleClick("Pending")}
        >
          <FaHome className={style.buttonIcon} />
          <p className={style.buttonText}>Home</p>
        </button>

        

        <button
          className={style.bottomNavButton}
          onClick={() => handleClick("Service")}
        >
          <FaPlus className={style.buttonIcon} />
          <p className={style.buttonText}>Service</p>
        </button>

        <button
          className={style.bottomNavButton}
          onClick={() => handleClick("Businesses")}
        >
          <FaBusinessTime className={style.buttonIcon} />
          <p className={style.buttonText}>Businesses</p>
        </button>

        <button
          className={style.bottomNavButton}
          onClick={() => handleClick("Profile")}
        >
          <FaUser className={style.buttonIcon} />
          <p className={style.buttonText}>Profile</p>
        </button>
      </div>
    </div>
  );
};

export default Mezgebu;
