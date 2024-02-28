import style from "./ClientProfile.module.css";
import { Profile } from "../../assets";
import Image from "next/image";
import { IoMdArrowBack, IoMdShare } from "react-icons/io";
import { FaMoneyBillTransfer, FaBookmark } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";

const ClientProfile: React.FC = () => {
  return (
    <div className={style.clientContainer}>
      <div className={style.topNav}>
        <IoMdArrowBack className={style.backIcon} />
        <h1>Client Profile</h1>
        <IoMdShare className={style.shareIcon} />
      </div>
      <div className={style.headerContainer}>
        <div className={style.imageCard}>
          <Image
            className={style.agentImage}
            src={Profile}
            alt="Client Profile Photo"
            width={100}
            height={50}
          />
        </div>
        <div className={style.clientName}>
          <h3>Client Name</h3>
        </div>
      </div>
      <div className={style.clientBio}>
        <div className={style.bio}>
          <h2>Bio: </h2>
        </div>
        <div className={style.bioDescription}>
          <h3>I&apos;m blessed to breath!!!</h3>
        </div>
      </div>
      <div className={style.miniDashboard}>
        <div className={style.analysis}>
          <FaBookmark className={style.icon} />
          <h5>Booked Services</h5>
          <h4>32</h4>
        </div>
        <div className={style.analysis}>
          <FaMoneyBillTransfer className={style.icon} />
          <h5>Total Transaction</h5>
          <h4>$1500</h4>
        </div>
        <div className={style.analysis}>
          <IoWallet className={style.icon} />
          <h5>Wallet Amount</h5>
          <h4>$500</h4>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
