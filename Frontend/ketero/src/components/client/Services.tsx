import React from "react";
import Image from "next/image";
import style from "./Services.module.css";
import { FaBuilding, FaUser, FaPhone, FaTag } from "react-icons/fa";
// import { ServiceImage } from "../../assets";

interface Service {
  serviceId: string;
  serviceName: string;
  companyName: string;
  serviceImage: string;
  serviceImageAlt: string;
  serviceDetail: string;
  companyAgentName: string;
  companyContact: string;
  servicePrice: number;
}

const serviceData: Service[] = [
  {
    serviceId: "1",
    serviceName: "Men Hair Cut",
    companyName: "Barber Shop",
    serviceImage: "ServiceImage",
    serviceImageAlt: "A Descriptive Image About The Service",
    serviceDetail:
      "Tailored haircuts, offer precise beard grooming, and provide specialized services like soothing scalp treatments and invigorating hot towel shaves.",
    companyAgentName: "Solomon Hailu",
    companyContact: "+251 911 556 9887",
    servicePrice: 35,
  },
  {
    serviceId: "2",
    serviceName: "Service 2",
    companyName: "Company B",
    serviceImage: "ServiceImage",
    serviceImageAlt: "Service 2 Image",
    serviceDetail:
      "Tailored haircuts, offer precise beard grooming, and provide specialized services like soothing scalp treatments and invigorating hot towel shaves.",
    companyAgentName: "Agent B",
    companyContact: "+251 911 556 9887",
    servicePrice: 150,
  },
  {
    serviceId: "3",
    serviceName: "Service 3",
    companyName: "Company C",
    serviceImage: "ServiceImage",
    serviceImageAlt: "ServiceImage",
    serviceDetail:
      "Tailored haircuts, offer precise beard grooming, and provide specialized services like soothing scalp treatments and invigorating hot towel shaves.",
    companyAgentName: "Agent C",
    companyContact: "+251 911 556 9887",
    servicePrice: 120,
  },
  {
    serviceId: "4",
    serviceName: "Service 4",
    companyName: "Company D",
    serviceImage: "ServiceImage",
    serviceImageAlt: "Service 4 Image",
    serviceDetail:
      "Tailored haircuts, offer precise beard grooming, and provide specialized services like soothing scalp treatments and invigorating hot towel shaves.",
    companyAgentName: "Agent D",
    companyContact: "+251 911 556 9887",
    servicePrice: 180,
  },
  {
    serviceId: "5",
    serviceName: "Service 5",
    companyName: "Company E",
    serviceImage: "ServiceImage",
    serviceImageAlt: "Service 5 Image",
    serviceDetail:
      "Tailored haircuts, offer precise beard grooming, and provide specialized services like soothing scalp treatments and invigorating hot towel shaves.",
    companyAgentName: "Agent E",
    companyContact: "+251 911 556 9887",
    servicePrice: 130,
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.serviceContainer}>
          {serviceData.map((service, index) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.contentContainer}>
          <div className={style.imageContainer}>
            <div className={style.imageCard}>
              {/* <Image
                className={style.image}
                src={ServiceImage}
                alt={service.serviceImageAlt}
              /> */}
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
              <h2 className={style.servicePrice}>$ {service.servicePrice}</h2>
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

export default Services;
