'use client'

import React, { useState } from 'react';  // Import useState from React
import AddService from '@/components/business/AddService';
import style from './Business.module.css';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';
import BusinessProfile from '@/components/business/BusinessProfile';
import Customers from '@/components/business/Customers';

const Business: React.FC = () => {
  const [toggle, setToggle] = useState<string>('Customer');

  const handleClick = (activity: string) => {
    setToggle(activity);
  };

  return (
    <div className={style.activityContainer}>
      <div className={style.activeWindow}>
        {toggle === 'Customer' ? <Customers /> : ''}
        {toggle === 'Profile' ? <BusinessProfile /> : ''}
        {toggle === 'AddService' ? <AddService /> : ''}
      </div>

      <div className={style.bottomNav}>
        <button
          className={style.bottomNavButton}
          onClick={() => handleClick('Customer')}
        >
          <FaHome className={style.buttonIcon} />
          <p className={style.buttonText}>Home</p>
        </button>

        <button
          className={style.bottomNavButton}
          onClick={() => handleClick('AddService')}
        >
          <FaPlus className={style.buttonIcon} />
          <p className={style.buttonText}>Add</p>
        </button>

        <button
          className={style.bottomNavButton}
          onClick={() => handleClick('Profile')}
        >
          <FaUser className={style.buttonIcon} />
          <p className={style.buttonText}>Profile</p>
        </button>
      </div>
    </div>
  );
};

export default Business;
