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
import { useMutation } from "react-query";
import { signUpBusiness } from "../../services/AuthService";
import { toast } from "sonner";
import { z } from "zod";

export function DialogDemo() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signupMutation = useMutation(
    (newBusiness: Business) => signUpBusiness(newBusiness),
    {
      onSuccess: () => {
          toast("Signup successful");
          console.log("Signup successful");
      },
      onError: (error) => {
        // Handle error, e.g., show an error message
        console.error("Error signing up:", error);
      },
    }
  );

    const signupSchema = z.object({
      businessName: z.string().min(2),
      ownerName: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(6),
      phone: z.string(),
    });


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await signupMutation.mutateAsync({
        businessName,
        ownerName,
        email,
        phone,
        password,
      });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button>Add Business</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new Business</DialogTitle>
          <DialogDescription>Fill the form and Click save</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="compname" className="text-right">
                Company's Name
              </Label>
              <Input
                id="compname"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="col-span-3"
              /> 
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Owner's Name
              </Label>
              <Input
                id="name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Phone" className="text-right">
                Phone
              </Label>
              <Input
                id="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <button type="submit" disabled={signupMutation.isLoading}>
              {signupMutation.isLoading ? "Saving..." : "Save"}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
export default Businesses;
