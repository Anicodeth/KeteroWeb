'use client'

import React, { useState } from 'react';  // Import useState from React
import AddService from '../../components/Business/AddService';
import style from './Business.module.css';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';
import BusinessProfile from '@/components/Business/BusinessProfile';
import Customers from '@/components/Business/Customers';

const Business = () => {
  const [toggle, setToggle] = useState<string>('Customer');

  const handleClick = (activity: string) => {
    setToggle(activity);
  };

  return (
    <div className={style.ActivityContainer}>
      <div className={style.ActiveWindow}>
        {toggle === 'Customer' ? <Customers /> : ''}
        {toggle === 'Profile' ? <BusinessProfile /> : ''}
        {toggle === 'AddService' ? <AddService /> : ''}
      </div>

      <div className={style.BottomNav}>
        <button
          className={style.BottomNav_Button}
          onClick={() => handleClick('Home')}
        >
          <FaHome className={style.Button_Icon} />
          <p className={style.Button_Text}>Home</p>
        </button>

        <button
          className={style.BottomNav_Button}
          onClick={() => handleClick('AddService')}
        >
          <FaPlus className={style.Button_Icon} />
          <p className={style.Button_Text}>Add</p>
        </button>

        <button
          className={style.BottomNav_Button}
          onClick={() => handleClick('Profile')}
        >
          <FaUser className={style.Button_Icon} />
          <p className={style.Button_Text}>Profile</p>
        </button>
      </div>
    </div>
  );
};

export default Business;
