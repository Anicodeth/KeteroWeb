import React from "react";
import { useState } from "react";
import Image from "next/image";
import style from "./Services.module.css";
import {
  categoryData,
  serviceData,
  companyData,
  FormData,
  toggles,
} from "./servicescomponents";
import ServiceCard from "./servicescomponents/ServiceCard";
import CategoryCard from "./servicescomponents/CategoryCard";
import CompanyCard from "./servicescomponents/CompanyCard";
import { AiOutlineMessage } from "react-icons/ai";
import { LuBellRing } from "react-icons/lu";
import { Logo, Profile } from "../../assets";
import { CiSearch } from "react-icons/ci";

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
        <div className={style.greetings}>
          <div className={style.greetClient}>
            <h3>Good Morning!</h3>
            <h3 className={style.client}>Client Name</h3>
          </div>
          <div className={style.profile}>
            <div className={style.profileImage}>
              <Image
                className={style.imageProfile}
                src={Profile}
                alt="Profile Image"
              />
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
          {toggleComponent === "Companies"
            ? companyData.map((company, index) => (
                <CompanyCard key={index} company={company} />
              ))
            : " "}
        </div>
      </div>
    </>
  );
};

export default Services;
