"use client"

import React, { useState } from "react";
import { useMutation, QueryClient, QueryClientProvider } from "react-query";
import { CiUser } from "react-icons/ci";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";
import { z, ZodError } from "zod";
import styles from "./Business.module.css";
import Link from "next/link";
import { signUpBusiness } from "../../../services/AuthService";
import { Business } from "@/models/Business";
import { toast } from "sonner";
import { motion } from "framer-motion"

const queryClient = new QueryClient();

const SignUp: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Form />
    </QueryClientProvider>
  );
};

const Form: React.FC = () => {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");


  const signupSchema = z.object({
    businessName: z.string().min(2),
    ownerName: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    phone:z.string(),
    workHours:z.string(),
    location:z.string()

  });

  const signupMutation = useMutation(
    (newBusiness: Business) => signUpBusiness(newBusiness),
    {
      onSuccess: () => {
        toast("Signup successful");
      },
      onError: (error: any) => {
        toast(error.response.data.error);
        console.error("Error signing up:", error.response.data.error);
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return "Password not matching";
      }
      const workHours = startTime + " - " + endTime;
      signupSchema.parse({ businessName, ownerName, email, password, phone, workHours, location });
      await signupMutation.mutateAsync({
        businessName,
        ownerName,
        email,
        password,
        phone,
        workHours,
        location
      });
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Error signing up:", error.response.data);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className={[styles.screen, styles.center].join(" ")}>
        <div className={styles.mainWrapper}>
          <h1></h1>
          <div>
            <h1 className={styles.heading}>Welcome</h1>
            <p className={styles.paragraph}>
              Hi, Enter your details to get sign up to your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <div className={[styles.inputWrapper, styles.center].join(" ")}>
                <div className={[styles.center].join(" ")}>
                  <CiUser></CiUser>
                </div>
                <input
                  type="text"
                  placeholder="Company's Name"
                  className="outline-none border-none"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
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
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
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
                  type="phone"
                  placeholder="Phone"
                  className="outline-none border-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="password"
                  placeholder="Password"
                  className="outline-none border-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  type="password"
                  placeholder="Confirm Password"
                  className="outline-none border-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <hr />
            </div>

            <div className="flex justify-between items-center">
              <h1 className="flex">Working Hours</h1>
              <div>
                <div className={[styles.inputWrapper, styles.center].join(" ")}>
                  <input
                    type="time"
                    placeholder="Opening Time"
                    className="outline-none border-none"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </div>
                <hr />
              </div>
              <div>
                <div className={[styles.inputWrapper, styles.center].join(" ")}>
                  <input
                    type="time"
                    placeholder="Closing Time"
                    className="outline-none border-none"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
                <hr />
              </div>
            </div>

            <div>
              <div className={[styles.inputWrapper, styles.center].join(" ")}>
                <div className={[styles.center].join(" ")}>
                  <CiUser></CiUser>
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none border-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <hr />
            </div>

            <button
              type="submit"
              className={styles.signupButton}
              disabled={signupMutation.isLoading}
            >
              {signupMutation.isLoading ? "Signing up..." : "Signup"}
            </button>

            <p className={styles.login}>
              Did you have an account already ?{" "}
              <Link href="/signin">
                <span>Login</span>
              </Link>
            </p>
          </form>
          <div>
            <p className={styles.paragraph}>Or Sign in via</p>
            <div className={styles.otherOption}>
              <div className={[styles.containerIcon, styles.center].join(" ")}>
                <FaGoogle className={styles.icon} size={20} color="#FF56A5" />
              </div>
              <div className={[styles.containerIcon, styles.center].join(" ")}>
                <AiOutlineApple
                  className={styles.icon}
                  size={20}
                  color="grey"
                />
              </div>
              <div className={[styles.containerIcon, styles.center].join(" ")}>
                <FaFacebookSquare
                  className={styles.icon}
                  size={20}
                  color="#197DCA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
