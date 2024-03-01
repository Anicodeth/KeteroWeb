import style from "./ServiceCard.module.css";
import Image from "next/image";
import { FaUser, FaBuilding, FaPhone, FaTag } from "react-icons/fa6";
import { ServiceImage, Burger } from "../../../assets";
import { Service } from "./index";

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.contentContainer}>
          <div className={style.imageContainer}>
            <div className={style.imageCard}>
              <Image
                className={style.image}
                src={service.serviceImage}
                alt={service.serviceImageAlt}
              />
            </div>
            <h1 className={style.serviceName}>{service.serviceName}</h1>
          </div>
          <div className={style.companyMessage}>
            <div className={style.companyName}>
              <FaBuilding className={style.companyIcon} />
              <h2>{service.companyName}</h2>
            </div>
            <div className={style.serviceDetail}>
              <p className={style.detailParagraph}>{service.serviceDetail}</p>
            </div>
          </div>
        </div>
        <div className={style.contactContainer}>
          <div className={style.contacts}>
            <div className={style.agentName}>
              <FaUser className={style.userIcon} />
              <h3>{service.companyAgentName}</h3>
            </div>
            <div className={style.agentPhone}>
              <FaPhone className={style.phoneIcon} />
              <h3>{service.companyContact}</h3>
            </div>
          </div>
          <div className={style.bookingInfo}>
            <div className={style.price}>
              <FaTag className={style.priceTagIcon} />
              <h3>Average Price</h3>
              <h2 className={style.servicePrice}>${service.servicePrice}</h2>
            </div>
            <div className={style.bookButton}>
              <button>Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
