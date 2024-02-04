import React from "react";
import style from "./Customers.module.css";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { MdHomeFilled } from "react-icons/md";

const Customers: React.FC = () => {
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
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
        <div className={[style.appointmentCard].join(" ")}>
          <p>Yohans Mehabaw</p>
          <div className={[style.situation].join(" ")}>
            <IoIosNotificationsOutline color="#DE3B40" />
            <p>Waiting</p>
          </div>
          <hr />
          <div>
            <IoIosNotificationsOutline />
            <p>09:34 AM</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>1500 ETB</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>(715) 941-6647</p>
          </div>
          <div>
            <IoIosNotificationsOutline />
            <p>3 services</p>
          </div>
          <hr />
          <button>Ready</button>
        </div>
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
