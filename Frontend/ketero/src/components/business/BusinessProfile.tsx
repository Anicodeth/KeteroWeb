import React from "react";
import style from "./BusinessProfile.module.css";
import { CiCircleCheck } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

interface Service {
  name: string;
  image: string;
  price: number;
}

interface Company {
  name: string;
  image: string;
  rate: number;
  tag: string;
  reviewNumber: number;
  description: string;
  employeeNumber: number;
  services: Service[];
}

const BusinessProfile: React.FC = () => {
  const company: Company = {
    name: "compnayName",
    image: "",
    rate: 5.0,
    tag: "Elite Tasker",
    reviewNumber: 43,
    description:
      "Working as a driver demands a set of vital skills and experiences to guarantee both safety and efficiency in transportation.",
    employeeNumber: 20,
    services: [
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
      { name: "Service name", image: "", price: 400 },
    ],
  };
  const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className={[style.businessProfile].join(" ")}>
      <div className={[style.profile].join(" ")}>
        <div className={[style.profileTop].join(" ")}>
          <img
            src="https://png.pngtree.com/background/20230525/original/pngtree-cute-anime-girl-wearing-flowers-picture-image_2735301.jpg"
            alt="Profile Picture"
            className={[style.profileImage].join(" ")}
          />
          <div className={[style.companyDetail].join(" ")}>
            <div className={[style.companyPerformance].join(" ")}>
              <p
                className={[
                  style.eliteWorker,
                  style.companyPerformanceStructure,
                ].join(" ")}
              >
                {company.tag}
              </p>
              <div
                className={[style.rate, style.companyPerformanceStructure].join(
                  " "
                )}
              >
                <p>
                  <CiStar size={20} />
                  <span>{company.rate}</span>
                </p>
                <p>({company.reviewNumber} reviews)</p>
              </div>
            </div>
            <p className={[style.companyName].join(" ")}>{company.name}</p>
          </div>
        </div>
        <p className={[style.description].join(" ")}>
          {company.description}
        </p>
        <div className={[style.employee].join(" ")}>
          <CiCircleCheck size={30} color="#565D6D" />
          <p>Employee</p>
          <p>{company.employeeNumber}</p>
        </div>
      </div>
      <div className={[style.serviceSection].join(" ")}>
        <p>Services</p>
        <div className={[style.services].join(" ")}>
          {company.services.map((service, index) => (
            <div className={[style.service].join(" ")} key={index}>
              <img
                src="https://png.pngtree.com/background/20230525/original/pngtree-cute-anime-girl-wearing-flowers-picture-image_2735301.jpg"
                alt=""
              />
              <div>
                <p>{service.name}</p>
                <p>Ullamco laborum</p>
              </div>
              <p>{service.price} ETB</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;