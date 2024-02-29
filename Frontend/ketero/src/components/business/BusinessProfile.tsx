import React from "react";
import style from "./BusinessProfile.module.css";
import { CiCircleCheck } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

// "_id": "65decfba2b97f45f7f7ecbe3",
// "email": "Sura@business.com",
// "password": "Business123456",
// "businessName": "First hair",
// "ownerName": "Sura",
// "services": [],
interface Service {
  name: string;
  description: string;
  price: number;
}

interface Company {
  _id: string;
  email: string;
  password: string;
  businessName: string;
  ownerName: string;
  services: Service[];
}

const BusinessProfile: React.FC = () => {
  const company: Company = {
    _id: "65decfba2b97f45f7f7ecbe3",
    email: "Sura@business.com",
    password: "Business123456",
    businessName: "First hair",
    ownerName: "Sura",
    services: [],
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
                {"Elite tasker"}
              </p>
              <div
                className={[style.rate, style.companyPerformanceStructure].join(
                  " "
                )}
              >
                <p>
                  <CiStar size={20} />
                  <span>{5.0}</span>
                </p>
                <p>({42} reviews)</p>
              </div>
            </div>
            <p className={[style.companyName].join(" ")}>
              {company.businessName}
            </p>
          </div>
        </div>
        <p className={[style.description].join(" ")}>
          {
            "Working as a driver demands a set of vital skills and experiences to guarantee both safety and efficiency in transportation."
          }
        </p>
        <div className={[style.employee].join(" ")}>
          <CiCircleCheck size={30} color="#565D6D" />
          <p>Employee</p>
          <p>{20}</p>
        </div>
      </div>
      <ServicesList></ServicesList>
    </div>
  );
};

interface Props {
  business_id: string;
}

const ServicesList: React.FC = () => {
  const services: Service[] = [
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
    { name: "Service name", description: "", price: 400 },
  ];
  return (
    <div className={[style.serviceSection].join(" ")}>
      <p>Services</p>
      <div className={[style.services].join(" ")}>
        {services.map((service, index) => (
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
  );
};

export default BusinessProfile;
