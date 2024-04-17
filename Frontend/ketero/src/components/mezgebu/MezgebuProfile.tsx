import style from "./MezgebuProfile.module.css";
import { FaBookmark } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useMutation, useQuery } from "react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { getPendingData } from "@/services/ReservationService";
import { getMezgebu, getMezgebuBusinesses } from "@/services/MezgebuService";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  deleteService,
  getService,
  updateService,
} from "@/services/ServiceServices";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const MezgebuProfile: React.FC = () => {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null;

  const { data: mezgebuData, isLoading: isBusinessLoading } = useQuery(
    "mezgebu",
    () => getMezgebu(user._id)
  );

  if (isBusinessLoading) {
    return <SkeletonCard />;
  }

  const revs = mezgebuData?.reservations;
  const services = mezgebuData?.services;

  return (
    <div className={style.clientContainer}>
      <div className={style.topNav}></div>
      <div className={style.headerContainer}>
        <div className={style.imageCard}>
          <Avatar className={style.agentImage}>
            <AvatarFallback>{mezgebuData && mezgebuData.name}</AvatarFallback>
          </Avatar>
        </div>
        <div className={style.clientName}>
          <h3>{mezgebuData && mezgebuData.name} </h3>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <div className={style.analysis}>
          <FaBookmark className={style.icon} />
          <h5>Reservations</h5>
          <h4>{revs.length}</h4>
        </div>
      </div>
      <div className={style.hiredContainer}>
        <h2>Services Confirmed</h2>
        {revs && revs.length > 0 ? (
          <div className={style.hiredServices}>
            {revs.map((reservationId: string, index: any) => (
              <HiredServiceCard
                key={index}
                reservationId={reservationId}
                status={true}
              />
            ))}
          </div>
        ) : (
          <p>No confirmed services</p>
        )}
        <h2>Services Pending</h2>
        {revs && revs.length > 0 ? (
          <div className={style.hiredServices}>
            {revs.map((reservationId: string, index: any) => (
              <HiredServiceCard
                key={reservationId}
                reservationId={reservationId}
                status={false}
              />
            ))}
          </div>
        ) : (
          <p>No pending services</p>
        )}

        <h2>Services Offered</h2>
        {services && services.length > 0 ? (
          <div className="flex flex-col gap-3">
            {services.map((serviceId: string, index: any) => (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                key={serviceId}
              >
                <ServiceShadCard key={serviceId} serviceId={serviceId} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p>No services offered</p>
        )}
      </div>
    </div>
  );
};
const HiredServiceCard: React.FC<{
  reservationId: string;
  status: boolean;
}> = ({ reservationId, status }) => {
  const {
    data: reservationData,
    isLoading: isReservationLoading,
    isError: isReservationError,
  } = useQuery(["reservation", reservationId], () =>
    getPendingData(reservationId)
  );

  if (isReservationLoading) {
    return <SkeletonCard />;
  }

  if (isReservationError) {
    return null;
  }

  if (status !== reservationData.confirmed) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className={style.cardContainer}>
        <div className="flex flex-row items-center">
          <img
            className="bg-cover h-8 w-10"
            src={reservationData.imageUrl}
          ></img>
          <div className={style.serviceData}>
            <h3>{reservationData.serviceName}</h3>
            <h5>{reservationData.serviceDescription.slice(0, 10) + "..."}</h5>
          </div>
        </div>

        <h3>{reservationData.servicePrice} ETB</h3>
      </div>
    </motion.div>
  );
};

export function SkeletonCard() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

const ServiceShadCard: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const {
    data: service,
    isLoading,
    isError,
  } = useQuery(["service", serviceId], () => getService(serviceId));

  if (isLoading) {
    return <SkeletonCard />;
  }

  if (isError || !service) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="h-fit">
        <CardHeader>
          {service.imageUrl && (
            <div
              className="inset-0 bg-cover h-40 bg-center"
              style={{ backgroundImage: `url(${service.imageUrl})` }}
            ></div>
          )}
          <CardTitle>{service.name}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
          <CardDescription>{service.price}</CardDescription>
        </CardHeader>
        <div className="flex justify-end gap-3 p-2">
          <DeleteServiceDialog id={service._id}></DeleteServiceDialog>
          <UpdateServiceDialog
            id={service._id}
            service={service}
          ></UpdateServiceDialog>
        </div>
      </Card>
    </motion.div>
  );
};

export default MezgebuProfile;

function DeleteServiceDialog({ id }: { id: string }) {
  const deleteMutation = useMutation(() => deleteService(id), {
    onSuccess: () => {
      toast("Service deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting service:", error);
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
            Are you sure you want to delete this service?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            service.
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

function UpdateServiceDialog({ id, service }: { id: string; service: any }) {
  const [image, setImage] = useState<File | string>(service.imageUrl);
  const [name, setName] = useState<string>(service.name);
  const [description, setDescription] = useState<string>(service.description);
  const [price, setPrice] = useState<string>(service.price);
  const [selectedBusiness, setSelectedBusiness] = useState<string>(
    service.businessId
  );

  const updateMutation = useMutation(
    () =>
      updateService(id, {
        name,
        description,
        price,
        image,
        selectedBusiness,
      }),
    {
      onSuccess: () => {
        toast("Service updated successfully");
      },
      onError: (error) => {
        console.error("Error updating service:", error);
        toast.error("Failed to update service");
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMutation.mutate();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
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
    <Dialog>
      <DialogTrigger>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
          <DialogDescription>Fill the form and Click save</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 py-4 items-center">
            <div className={[style.inputImage].join(" ")}>
              {image ? (
                <img
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
                  alt=""
                />
              ) : (
                <IoIosAddCircle size={60} color="#700F14" />
              )}
              <label htmlFor="image" className={[style.icon].join(" ")}>
                +
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="business" className={[style.block].join(" ")}>
                Business
              </label>
              <select
                id="business"
                className="w-full h-8"
                value={selectedBusiness}
                onChange={(e) => setSelectedBusiness(e.target.value)}
              >
                {isBusinessesLoading ? (
                  <option value="" disabled>
                    Loading...
                  </option>
                ) : businessesError ? (
                  <option value="" disabled>
                    Error loading businesses
                  </option>
                ) : (
                  businesses.map((business: any) => (
                    <option key={business._id} value={business._id}>
                      {business.businessName}
                    </option>
                  ))
                )}
              </select>
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="serviceName" className={[style.block].join(" ")}>
                Service Title
              </label>
              <input
                type="text"
                id="serviceName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={[style.input].join(" ")}
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="payment" className={[style.block].join(" ")}>
                Payment
              </label>
              <input
                type="text"
                id="payment"
                className={[style.input].join(" ")}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="description" className={[style.block].join(" ")}>
                Description
              </label>
              <input
                type="text"
                id="description"
                className={[style.input].join(" ")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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