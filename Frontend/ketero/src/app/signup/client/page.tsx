import React from "react";
import { CiUser } from "react-icons/ci";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";

import styles from "./Client.module.css";
import Link from "next/link";

import { useState } from "react";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmmPassword, setConfirmPassword]  = useState("");

  async function handleSignUp(){

  }
  
  return (
    <div className={[styles.screen, , styles.center].join(" ")}>
      <div className={[styles.mainWrapper].join(" ")}>
        <h1></h1>
        <div>
          <h1 className={[styles.heading].join(" ")}>Welcome</h1>
          <p className={[styles.paragraph].join(" ")}>
            Hi, Enter your details to get sign up to your account
          </p>
        </div>
        <form onSubmit={handleSignUp} className={[styles.form].join(" ")}>
          <div>
            <div className={[styles.inputWrapper, styles.center].join(" ")}>
              <div className={[styles.center].join(" ")}>
                <CiUser></CiUser>
              </div>
              <input
                type="text"
                placeholder="Name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
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
                value={email}
                onChange = {(e)=>setEmail(e.target.value)}
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
                value = {password}
                onChange = {(e)=>setPassword(e.target.value)}
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
                value ={confirmmPassword}
                onChange = {(e)=>setConfirmPassword(e.target.value)}
              />
            </div>
            <hr />
          </div>
          <button type="submit" className={[styles.signupButton].join(" ")}>Signup</button>
        <p className={styles.login}>Did you have an account already ? <Link href="/signin"><span>Login</span></Link></p>
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
