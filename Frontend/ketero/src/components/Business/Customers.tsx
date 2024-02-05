import React from "react";
import style from "./Customers.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { MdHomeFilled } from "react-icons/md";


const Customers: React.FC = () => {

  const appointmentData = [
    { customer: "Ananya Fekeremariam", status: "Waiting", time: "09:34 AM", payment: "1500Birr", amount: "3 Services", phone: "+251 911909090" },
    { customer: "John Doe", status: "Confirmed", time: "10:00 AM", payment: "1200Birr", amount: "2 Services", phone: "+251 922345678" },
    { customer: "Jane Smith", status: "In Service", time: "11:30 AM", payment: "2000Birr", amount: "4 Services", phone: "+251 933456789" },
    { customer: "Mike Johnson", status: "Waiting", time: "01:00 PM", payment: "1800Birr", amount: "3 Services", phone: "+251 944567890" },
    { customer: "Emily Brown", status: "Confirmed", time: "02:30 PM", payment: "1500Birr", amount: "2 Services", phone: "+251 955678901" },
    { customer: "Daniel White", status: "In Service", time: "04:00 PM", payment: "2500Birr", amount: "5 Services", phone: "+251 966789012" },
    { customer: "Sophia Miller", status: "Waiting", time: "05:30 PM", payment: "2000Birr", amount: "4 Services", phone: "+251 977890123" },
    { customer: "William Davis", status: "Confirmed", time: "07:00 PM", payment: "1800Birr", amount: "3 Services", phone: "+251 988901234" },
    { customer: "Olivia Wilson", status: "In Service", time: "08:30 PM", payment: "3000Birr", amount: "6 Services", phone: "+251 999012345" },
    { customer: "Ethan Anderson", status: "Waiting", time: "10:00 PM", payment: "2200Birr", amount: "4 Services", phone: "+251 9101234567" },
  ];
  
  return (
    <div className={[style.customerComponent].join(" ")}>
      <p className={[style.logo].join(" ")} id={style.customerComponent1}>
        Logo
      </p>
      <div id={style.customerComponent2}>
        <p className={[style.goodMorning].join(" ")}>Good morning!</p>
        <p className={[style.ownerName].join(" ")}>Owner's Name</p>
      </div>
      <p className={[style.home].join(" ")}>Home</p>
      <p className={[style.task].join(" ")}>Tasks</p>
      <p className={[style.profile].join(" ")}>Profile</p>
      <div
        className={[style.messageWrapper].join(" ")}
        id={style.customerComponent3}
      >
        <AiOutlineMessage size={25} />
        <IoIosNotificationsOutline size={25} />
      </div>
      <div id={style.customerComponent4}>
        <div className={[style.messageWrapper, style.notShow].join(" ")}>
          <AiOutlineMessage size={25} />
          <IoIosNotificationsOutline size={25} />
        </div>
        <img
          src="https://png.pngtree.com/background/20230525/original/pngtree-cute-anime-girl-wearing-flowers-picture-image_2735301.jpg"
          alt="Profile Picture"
          className={[style.profileImage].join(" ")}
        />
      </div>
      <div
        className={[style.tabBarDate].join(" ")}
        id={style.customerComponent5}
      >
        <p className={[style.selectedTabBarDate].join(" ")}>Today</p>
        <p>This Week</p>
        <p>This Month</p>
      </div>
      <div className={[].join(" ")} id={style.customerComponent6}>
        <div className={[style.topCard, style.unselectedTopCard].join(" ")}>
          <p>Customers</p>
          <p>30</p>
        </div>
        <div className={[style.topCard].join(" ")}>
          <p>Revenue</p>
          <p>3000 ETB</p>
        </div>
      </div>
      <div id={style.customerComponent8}>
        <p>Upcoming Appointment</p>
        <p id={style.seeAll}>see all</p>
      </div>

      <div
        className={[style.appointmentCards].join(" ")}
        id={style.customerComponent9}
      >
        

        {appointmentData.map((appointment, index)=> (
              <div key={index} className={[style.appointmentCard].join(" ")}>
              <p>{appointment.customer}</p>
              <div className={[style.situation].join(" ")}>
                <IoIosNotificationsOutline color="#DE3B40" />
                <p>{appointment.status}</p>
              </div>
              <hr />
              <div>
                <IoIosNotificationsOutline />
                <p>{appointment.time}</p>
              </div>
              <div>
                <IoIosNotificationsOutline />
                <p>{appointment.payment}</p>
              </div>
              <div>
                <IoIosNotificationsOutline />
                <p>{appointment.phone}</p>
              </div>
              <div>
                <IoIosNotificationsOutline />
                <p>{appointment.amount}</p>
              </div>
              <hr />
              <button>Ready</button>
              </div>
        ))} 
        
      </div>
      <div
        className={[style.taskCard].join(" ")}
        id={style.customerComponent10}
      >
        <div>
          <FcTodoList />
          <p>
            1 Customers <span>to Confirm</span>
          </p>
        </div>
        <div>
          <FcTodoList />
          <p>
            4 Customers <span>in Waiting</span>
          </p>
        </div>
        <div>
          <FcTodoList />
          <p>
            6 Customers <span>in Service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
