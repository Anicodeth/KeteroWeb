import React from "react";
import { CiUser } from "react-icons/ci";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";

import styles from "./SignIn.module.css";
import Link from "next/link";

const SignIn: React.FC = () => {
  return (
    <div className={[styles.screen, , styles.center].join(" ")}>
      <div className={[styles.mainWrapper].join(" ")}>
        <h1></h1>
        <div>
          <h1 className={[styles.heading].join(" ")}>Welcome</h1>
          <p className={[styles.paragraph].join(" ")}>
            Hi, Enter your details to get login to your account
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
          <button className={[styles.signupButton].join(" ")}>LogIn</button>
          <p className={styles.login}>Didn't you have an account ? <Link href="/signup"><span>Signup</span></Link></p>
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

export default SignIn;
