import React from "react";
import Image from "next/image";
import style from "./Services.module.css";
import { FaBuilding, FaUser, FaPhone, FaTag } from "react-icons/fa";
// import { ServiceImage } from "../../assets";
import { Service } from "../../models/Service"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from 'next/link';
import { Button } from "@/components/ui/button";


const serviceData: Service[] = [
  {
    _Id: "1",
    name: "Men Hair Cut",
    description: "Barber Shop",
    image: "ServiceImage",
    payment: "A Descriptive Image About The Service",

  },
 

];

const Services: React.FC = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <h1>Recent Services</h1>
        <div className={style.serviceContainer}>
          {serviceData.map((service, index) => (
            <ServiceShadCard key={service.serviceId} service={service} />
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
              <img src={service.image} alt={service.name} className={style.image} />
            </div>
            <h1 className={style.serviceName}>{service.name}</h1>
          </div>
          <div className={style.companyMessage}>
            <div className={style.serviceDetail}>
              <p className={style.detailParagraph}>{service.description}</p>
            </div>
          </div>
        </div>
        <div className={style.contactContainer}>
          <div className={style.bookingInfo}>
            <div className={style.price}>
              <h3>Average Price</h3>
              <h2 className={style.servicePrice}>$ {service.payment}</h2>
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


const ServiceShadCard: React.FC<{ service: Service }> = ({ service }) => {

  return (
 
    
            <Link href = '/booking'>
                 <Card >
                    <CardHeader>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                        <CardDescription>{service.payment}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Button>
                            Book
                        </Button>
                    </CardContent>
                </Card>
            </Link>

        
    
  );
}

export default Services;
