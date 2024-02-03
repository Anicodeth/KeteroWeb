import React from "react";
import { CiUser } from "react-icons/ci";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";

import styles from "./SignUp.module.css";

const SignUp: React.FC = () => {
  return (
    <div className={[styles.screen, , styles.center].join(" ")}>
      <div className={[styles.mainWrapper].join(" ")}>
        <h1>LOGO</h1>
        <div>
          <h1 className={[styles.heading].join(" ")}>Welcome</h1>
          <p className={[styles.paragraph].join(" ")}>
            Hi, Enter your details to get sign in to your account
          </p>
        </div>
        <form action="" className={[styles.form].join(" ")}>
          <div>
            <div className={[styles.inputWrapper, styles.center].join(" ")}>
              <div className={[styles.center].join(" ")}>
                <CiUser></CiUser>
              </div>
              <input
                type="text"
                placeholder="Company's Name"
                className="outline-none border-none"
              />
            </div>
            <hr />
          </div>
          <div>
            <div className={[styles.inputWrapper, styles.center].join(" ")}>
              <div className={[styles.center].join(" ")}>
                <CiUser></CiUser>
              </div>
              <input
                type="text"
                placeholder="Owner's Name"
                className="outline-none border-none"
              />
            </div>
            <hr />
          </div>
          <div>
            <div className={[styles.inputWrapper, styles.center].join(" ")}>
              <div className={[styles.center].join(" ")}>
                <CiUser></CiUser>
              </div>
              <input
                type="text"
                placeholder="Email"
                className="outline-none border-none"
              />
            </div>
            <hr />
          </div>
          <div>
            <div className={[styles.inputWrapper, styles.center].join(" ")}>
              <div className={[styles.center].join(" ")}>
                <CiUser></CiUser>
              </div>
              <input
                type="text"
                placeholder="Password"
                className="outline-none border-none"
              />
            </div>
            <hr />
          </div>
          <div>
            <div className={[styles.inputWrapper, styles.center].join(" ")}>
              <div className={[styles.center].join(" ")}>
                <CiUser></CiUser>
              </div>
              <input
                type="text"
                placeholder="Confirm Password"
                className="outline-none border-none"
              />
            </div>
            <hr />
          </div>
          <button className={[styles.signupButton].join(" ")}>Signup</button>
        </form>
        <div>
          <p className={[styles.paragraph].join(" ")}>Or Sign in via</p>
          <div className={[styles.otherOption].join(" ")}>
            <div className={[styles.containerIcon, styles.center].join(" ")}>
              <FaGoogle
                className={[styles.icon].join(" ")}
                size={20}
                color="#FF56A5"
              />
            </div>
            <div className={[styles.containerIcon, styles.center].join(" ")}>
              <AiOutlineApple className={[styles.icon].join(" ")} size={20} color="grey"/>
            </div>
            <div className={[styles.containerIcon, styles.center].join(" ")}>
              <FaFacebookSquare className={[styles.icon].join(" ")} size={20} color="#197DCA"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
