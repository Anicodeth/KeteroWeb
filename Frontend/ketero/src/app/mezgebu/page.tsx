"use client";

import React, { useState } from "react"; // Import useState from React
import style from "@/app/business/Business.module.css";
import { FaHome, FaUser } from "react-icons/fa";

import MezgebuProfile from "@/components/mezgebu/MezgebuProfile";
import Orders from "@/components/mezgebu/Orders";

const Mezgebu: React.FC = () => {
  const [toggle, setToggle] = useState<string>("Customer");

  const handleClick = (activity: string) => {
    setToggle(activity);
  };

  return (
    <div className={style.activityContainer}>
      <div className={style.activeWindow}>
        {toggle === "Pending" ? <Orders /> : ""}
        {toggle === "Profile" ? <MezgebuProfile /> : ""}
      </div>

      <div className={style.bottomNav}>
        <button
          className={style.bottomNavButton}
          onClick={() => handleClick("Pending")}
        >
          <FaHome className={style.buttonIcon} />
          <p className={style.buttonText}>Home</p>
        </button>

        {/* <button
          className={style.bottomNavButton}
          onClick={() => handleClick("AddService")}
        >
          <FaPlus className={style.buttonIcon} />
          <p className={style.buttonText}>Add</p>
        </button> */}

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
