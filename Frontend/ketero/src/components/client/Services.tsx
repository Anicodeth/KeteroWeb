"use client"
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
import { useQuery } from 'react-query';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

import {getServices} from "../../services/ServiceServices"
import { FallingLines } from 'react-loader-spinner'



const Services: React.FC = () => {
  const { data: serviceData, isLoading, isError } = useQuery('services', getServices);

  if (isLoading) return <div className = "h-full w-full flex items-center justify-center"><FallingLines
  color="#700F14"
  width="100"
  visible={true}
  /></div>


  if (isError) return <div>Error fetching services</div>;

  return (
    <>
      <div className={style.mainContainer}>
        <h1>Recent Services</h1>
        <div className={style.serviceContainer}>
          {serviceData.map((service: Service, index: number) => (
            <ServiceShadCard key={index} service={service} />
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
              <img src={service.imageUrl} alt={service.name} className={style.image} />
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
              <h2 className={style.servicePrice}>Etb {service.price}</h2>
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
                 <Card className = "h-fit">
                    <CardHeader >
                        <div className = "inset-0 bg-cover h-32 bg-center" 
                          style={{ backgroundImage: `url(${service.imageUrl})` }}>
                          {/* <img className = "w-full h-32" src = {service.image}></img> */}
                        </div>
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                        <CardDescription>{service.price}</CardDescription>
                    </CardHeader>

                    <CardContent >
                        <Button className = "w-full">
                            Book
                        </Button>
                    </CardContent>
                </Card>
            </Link>

        
    
  );
}

export default Services;
