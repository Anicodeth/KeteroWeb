import React, { useState } from "react";
import style from "./AddService.module.css";
import { IoIosAddCircle } from "react-icons/io";

const AddService: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  return (

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
            Service Name
          </label>
          <input
            type="text"
            id="serviceName"
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
          />
        </div>
        <button className={[style.buttonAddService].join(" ")}>
          Add Service
        </button>

      </div>
    </div>
  );
};

export default AddService;
