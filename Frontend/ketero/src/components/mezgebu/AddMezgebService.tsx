import React, { useState, useEffect } from "react";
import style from "../business/AddService.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { z, ZodError } from "zod";
import { useMutation, useQuery } from "react-query";
import { createService } from "../../services/ServiceServices";
import { CreateService } from "@/models/Service";
import { getMezgebuBusinesses } from "@/services/MezgebuService";

const AddMezgebService: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [payment, setPayment] = useState<string>("");
  const [selectedBusiness, setSelectedBusiness] = useState<string>("");

  const user =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user")!)
      : null;

  const {
    data: businesses,
    isLoading: isBusinessesLoading,
    error: businessesError,
  } = useQuery("businesses", () => getMezgebuBusinesses(user._id));

  useEffect(() => {
    if (businesses && businesses.length > 0) {
      setSelectedBusiness(businesses[0]._id);
    }
  }, [businesses]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const serviceScheme = z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
  });

  const mutation = useMutation(
    async (data: CreateService) => {
      await createService(selectedBusiness, data);
    },
    {
      onSuccess: () => {
        toast.success("Service added successfully.");
      },
      onError: (error: any) => {
        console.error("Error adding service:", error);
        toast.error("Failed to add service. Please try again.");
      },
    }
  );

  const handleSubmit = async () => {
    try {
      if (!image || !name || !description || !payment) {
        toast.error("Please fill in all fields.");
        return;
      }

      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", payment);

      const data = {
        name: name,
        description: description,
        price: payment,
        image: image,
      };

      serviceScheme.parse(data);
      await mutation.mutateAsync(data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Zod validation failed", error.errors);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className={[style.wrapper].join(" ")}>
          <div className={[style.inputImage].join(" ")}>
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" />
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
          <div className={[style.inputFields].join(" ")}>
            <div>
              <label htmlFor="business" className={[style.block].join(" ")}>
                Business
              </label>
              <select
                id="business"
                className={[style.input].join(" ")}
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
            <div>
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
            <div>
              <label htmlFor="payment" className={[style.block].join(" ")}>
                Payment
              </label>
              <input
                type="text"
                id="payment"
                className={[style.input].join(" ")}
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />
            </div>
            <div>
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
            <button
              onClick={handleSubmit}
              className={[style.buttonAddService].join(" ")}
            >
              {mutation.isLoading ? "Adding..." : "Add Service"}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AddMezgebService;
