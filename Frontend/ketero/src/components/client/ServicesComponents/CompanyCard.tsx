import style from "./CompanyCard.module.css";
import Image from "next/image";
import { Companies } from "./index";
import { FaPhone, FaUser, FaMapMarkerAlt } from "react-icons/fa";

const CompanyCard: React.FC<{ company: Companies }> = ({ company }) => {
  return (
    <>
      <div className={style.companyContainer}>
        <div className={style.headerContainer}>
          <div className={style.imageCard}>
            <Image
              className={style.agentImage}
              src={company.companyImage}
              alt="Company Agent Photo"
              width={100}
              height={50}
            />
          </div>
          <div className={style.companyName}>
            <h3> {company.companyName} </h3>
          </div>
        </div>
        <div className={style.contacts}>
          <div className={style.nameAndPhone}>
            <div className={style.agentName}>
              <FaUser className={style.userIcon} />
              <h3>{company.companyAgentName}</h3>
            </div>
            <div className={style.agentPhone}>
              <FaPhone className={style.phoneIcon} />
              <h3>{company.companyPhone}</h3>
            </div>
          </div>
          <div className={style.agentAddress}>
            <FaMapMarkerAlt className={style.phoneIcon} />
            <h3>{company.companyAddress}</h3>
          </div>
        </div>
        <div className={style.detailButton}>
          <button className={style.btn}>Detail</button>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
