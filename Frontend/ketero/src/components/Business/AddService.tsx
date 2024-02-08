import React from "react";
import style from "./AddService.module.css";
import { IoIosAddCircle } from "react-icons/io";


const AddService: React.FC = () => {
  return (
    <div className={[style.wrapper].join(' ')}>
      <div className={[style.inputImage].join(" ")}>
        <img
          src="https://png.pngtree.com/background/20230525/original/pngtree-cute-anime-girl-wearing-flowers-picture-image_2735301.jpg"
          alt=""
        />
        <div className={[style.icon].join(' ')}>+</div>
      </div>
      <div className={[style.inputFields].join(" ")}>
        <div>
          <label htmlFor="serviceName" className={[style.block].join(' ')}>Service Name</label>
          <input type="text" id="serviceName" className={[style.input].join(' ')}/>
        </div>
        <div>
          <label htmlFor="payment" className={[style.block].join(' ')}>Payment</label>
          <input type="text" id="payment" className={[style.input].join(' ')}/>
        </div>
        <div>
          <label htmlFor="description" className={[style.block].join(' ')}>Description</label>
          <input type="text" id="description" className={[style.input].join(' ')}/>
        </div>
        <button className={[style.buttonAddService].join(" ")}><span className={[style.fontSize].join(' ')}>+</span>Add Service</button>
      </div>
    </div>
  );
};

export default AddService;
