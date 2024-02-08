import React from "react";
import { useState } from "react";
import Image from "next/image";
import style from "./Services.module.css";
<<<<<<< HEAD
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
=======
import {
  categoryData,
  serviceData,
  FormData,
  toggles,
} from "./ServicesComponents";
import ServiceCard from "./ServicesComponents/ServiceCard";
import CategoryCard from "./ServicesComponents/CategoryCard";
import CompanyCard from "./ServicesComponents/CompanyCard";
import { AiOutlineMessage } from "react-icons/ai";
import { LuBellRing } from "react-icons/lu";
import { Logo, ClientProfile } from "../../Assets";
import { CiSearch } from "react-icons/ci";
>>>>>>> origin/nahom.service

const Services: React.FC = () => {
  const [FormData, setFormData] = useState<FormData>({
    searchValue: "",
  });

  const [selectedBar, setSelectedBar] = useState<string>("Services");
  const [toggleComponent, setToggleComponent] = useState<string>("Services");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, name: value }));
  };
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.header}>
          <div className={style.logo}>
            <Image className={style.imageLogo} src={Logo} alt="Ketero Logo" />
          </div>
          <div className={style.notificationIcons}>
            <AiOutlineMessage className={style.messageIcon} />
            <LuBellRing className={style.bellIcon} />
          </div>
        </div>
<<<<<<< HEAD
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
=======
        <div className={style.greetings}>
          <div className={style.greetClient}>
            <h3>Good Morning!</h3>
            <h3 className={style.client}>Client Name</h3>
          </div>
          <div className={style.profile}>
            <div className={style.profileImage}>
              <Image
                className={style.imageProfile}
                src={ClientProfile}
                alt="Profile Image"
              />
>>>>>>> origin/nahom.service
            </div>
          </div>
        </div>
        <div className={style.search}>
          <div className={style.searchForm}>
            <div className={style.searchContainer}>
              <CiSearch className={style.searchIcon} />
            </div>
            <input
              type="text"
              name="name"
              className={style.input}
              placeholder="what do you need help with?"
              value={FormData.searchValue}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className={style.toggle}>
          {toggles.map((toggle, index) => (
            <div key={toggle.id} className={style.categories}>
              <button
                className={
                  toggle.id === "1" && selectedBar === "Services"
                    ? style.selectedBar
                    : toggle.id === "2" && selectedBar === "Categories"
                    ? style.selectedBar
                    : toggle.id === "3" && selectedBar === "Companies"
                    ? style.selectedBar
                    : ""
                }
                onClick={() => {
                  setSelectedBar(toggle.name);
                  setToggleComponent(
                    toggle.id === "1"
                      ? "Services"
                      : toggle.id === "2"
                      ? "Categories"
                      : "Companies"
                  );
                }}
              >
                {toggle.name}
              </button>
            </div>
          ))}
        </div>
        <div className={style.serviceContainer}>
          {toggleComponent === "Services"
            ? serviceData.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))
            : " "}
          {toggleComponent === "Categories"
            ? categoryData.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))
            : " "}
          {toggleComponent === "Categories"
            ? categoryData.map((category, index) => (
                <CompanyCard key={index} category={category} />
              ))
            : " "}
        </div>
      </div>
    </>
  );
};

export default Services;
