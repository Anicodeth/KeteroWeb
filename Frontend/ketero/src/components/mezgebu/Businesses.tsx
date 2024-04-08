import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import style from "./Businesses.module.css";
import { useQuery } from "react-query";
import { getMezgebuBusinesses } from "../../services/MezgebuService";
import { Business } from "@/models/Business";

const Businesses: React.FC = () => {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null;

  const {
    data: businesses,
    isLoading: isBusinessesLoading,
    error: businessesError,
  } = useQuery("businesses", () => getMezgebuBusinesses(user._id));
  return (
    <div className={style.wrapper}>
      <h1 className="text-xl font-bold">My Businesses</h1>
      <DialogDemo></DialogDemo>
      {isBusinessesLoading ? (
        <p>Loading....</p>
      ) : businessesError ? (
        <p>Error {businessesError as string}</p>
      ) : (
        <div className={style.listCard}>
          {businesses.map((business: any) => (
            <BusinessCard key={business.id} business={business}></BusinessCard>
          ))}
        </div>
      )}
    </div>
  );
};



const BusinessCard: React.FC<{business:Business}> = ({business}) => {
  return (
    <div className={style.card}>
      <div className={[style.colSpan].join("")}>
        <h2 className={style.h2}>{business.businessName}</h2>
        <hr className={style.hr} />
      </div>
      <div className={[style.horizontal].join("")}>
        <FaUserTie /> <p>{business.ownerName}</p>
      </div>

      <div className={[style.horizontal].join("")}>
        <FaEnvelope /> <p>{business.email}</p>
      </div>

      <div className={[style.horizontal].join("")}>
        <FaPhone /> <p>{business.phone}</p>
      </div>
    </div>
  );
};


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Business</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new Business</DialogTitle>
          <DialogDescription>Fill the form and Click save</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="compname" className="text-right">
              Company's Name
            </Label>
            <Input id="compname" value="Afro Burgers" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Owner's Name
            </Label>
            <Input id="name" value="Nathan Damtew" className="col-span-3" />
          </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Company Name
          </Label>
          <Input id="name" value="Afro Burgers" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Company Name
          </Label>
          <Input id="name" value="Afro Burgers" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Company Name
          </Label>
          <Input id="name" value="Afro Burgers" className="col-span-3" />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


export default Businesses;
