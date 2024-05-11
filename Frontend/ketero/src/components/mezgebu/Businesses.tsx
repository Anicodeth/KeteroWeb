import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import style from "./Businesses.module.css";
import { useQuery } from "react-query";
import { getMezgebuBusinesses } from "../../services/MezgebuService";
import { Business } from "@/models/Business";
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
import { signUpBusinessMezgeb } from "../../services/AuthService";
import { toast } from "sonner";
import { ZodError, z } from "zod";
import { deleteBusiness, updateBusiness } from "@/services/BusinessService";

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
      <AddBusinessDialog />
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

const BusinessCard: React.FC<{ business: any }> = ({ business }) => {
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

      <div className="flex justify-between w-full">
        <DeleteBusinessDialog id={business._id} />
        <UpdateBusinessDialog id={business._id} business={business} />
      </div>
    </div>
  );
};

function AddBusinessDialog() {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");

  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null;

  const signupMutation = useMutation(
    (newBusiness: Business) => signUpBusinessMezgeb(newBusiness, user.email),
    {
      onSuccess: () => {
        toast("Business added successfully");
      },
      onError: (error) => {
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
    location: z.string(),
    workHours: z.string(),
  });

  const handleSubmit = async (e: any) => {
    const workHours = startTime + " - " + endTime;
    e.preventDefault();
    try {
      signupSchema.parse({
        businessName,
        ownerName,
        email,
        password,
        phone,
        location,
        workHours,
      });
      await signupMutation.mutateAsync({
        businessName,
        ownerName,
        email,
        phone,
        password,
        location,
        workHours,
      });
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Error signing up:", error.response.data);
      }
      console.error("Error signing up:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full">Add Business</Button>
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
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="StartTime" className="text-right">
                Start Time
              </Label>
              <Input
                type="time"
                id="starttime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="EndTime" className="text-right">
                End Time
              </Label>
              <Input
                type="time"
                id="endtime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
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
            <Button type="submit" disabled={signupMutation.isLoading}>
              {signupMutation.isLoading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function DeleteBusinessDialog({ id }: { id: string }) {
  const deleteMutation = useMutation(() => deleteBusiness(id), {
    onSuccess: () => {
      toast("Business deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting business:", error);
    },
  });
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to delete this business?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            business.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => deleteMutation.mutateAsync()}
            disabled={deleteMutation.isLoading}
          >
            {deleteMutation.isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function UpdateBusinessDialog({ id, business }: { id: string; business: any }) {
  const [businessName, setBusinessName] = useState(business.businessName);
  const [ownerName, setOwnerName] = useState(business.ownerName);
  const [email, setEmail] = useState(business.email);
  const [phone, setPhone] = useState(business.phone);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");

  const updateMutation = useMutation(
    () => updateBusiness(id, { businessName, ownerName, email, phone }),
    {
      onSuccess: () => {
        toast("Business updated successfully");
      },
      onError: (error) => {
        console.error("Error updating business:", error);
        toast.error("Failed to update business");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMutation.mutate();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Business</DialogTitle>
          <DialogDescription>Fill the form and Click save</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="compname" className="text-right">
                Company's Name
              </label>
              <input
                id="compname"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Owner's Name
              </label>
              <input
                id="name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="Phone" className="text-right">
                Phone
              </label>
              <input
                id="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="Email" className="text-right">
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="location" className="text-right">
                Location
              </label>
              <input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="StartTime" className="text-right">
                Start Time
              </label>
              <input
                type="time"
                id="starttime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="EndTime" className="text-right">
                End Time
              </label>
              <input
                type="time"
                id="endtime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={updateMutation.isLoading}>
              {updateMutation.isLoading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Businesses;
