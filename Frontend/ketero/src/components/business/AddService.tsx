import React, { useState } from "react";
import style from "./AddService.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { z, ZodError } from "zod";
import { useMutation, QueryClient, QueryClientProvider } from "react-query";
import { createService } from "../../services/ServiceServices";

const AddService: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
};

function Form() {
  const [image, setImage] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [payment, setPayment] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const serviceScheme = z.object({
    name: z.string(),
    description: z.string(),
    payment: z.string(),
  });

  const mutation = useMutation(
    async (formData: FormData) => {
      const businessId: string | null = sessionStorage.getItem('user');
      if (businessId) {
        await createService(businessId, formData);
      } else {
        throw new Error("BusinessId not found in sessionStorage");
      }
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
      formData.append("payment", payment);

      serviceScheme.parse({ name, description, payment });
      await mutation.mutateAsync(formData);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Zod validation failed");
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  return (
    <>
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
          <button onClick={handleSubmit} className={[style.buttonAddService].join(" ")}>
            Add Service
          </button>
        </div>
      </div>
    </>
  );
}

export default AddService;
