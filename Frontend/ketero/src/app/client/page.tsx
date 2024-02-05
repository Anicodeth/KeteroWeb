'use client'

import React, { useState } from 'react';  // Import useState from React
import style from './Client.module.css';
import { FaHome, FaPlus, FaUser, FaMenu } from 'react-icons/fa';

import Pending from '../../components/client/Pending';
import CLientProiile from '../../components/client/ClientProfile';
import Services from '../../components/client/Services';

const Client: React.FC = () => {
  const [toggle, setToggle] = useState<string>('Services');

  const handleClick = (activity: string) => {
    setToggle(activity);
  };

  return (
    <div className={style.activityContainer}>
      <div className={style.activeWindow}>
        {toggle === 'Services' ? <Services /> : ''}
        {toggle === 'Profile' ? <CLientProiile /> : ''}
        {toggle === 'Pending' ? <Pending /> : ''}
      </div>

      <div className={style.bottomNav}>
        <button
          className={style.bottomNavButton}
          onClick={() => handleClick('Services')}
        >
          <FaHome className={style.buttonIcon} />
          <p className={style.buttonText}>Services</p>
        </button>

        <button
          className={style.bottomNavButton}
          onClick={() => handleClick('Pending')}
        >
          <FaPlus className={style.buttonIcon} />
          <p className={style.buttonText}>Pending</p>
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

export default Client;
