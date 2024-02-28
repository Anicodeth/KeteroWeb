"use client"

import React, {useState}from "react";
import { CiUser } from "react-icons/ci";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";

import styles from "./SignIn.module.css";
import Link from "next/link";
import {z, ZodError} from 'zod';
import { Login } from "@/models/Login";
import {signIn} from "../../services/AuthService";
import {toast} from 'sonner'
import { useMutation, QueryClient, QueryClientProvider } from "react-query";
import {motion} from "framer-motion";


const SignIn: React.FC = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client = {queryClient}>
        <Form />
    </QueryClientProvider>
  );
};

function Form(){
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");


  const loginScheme = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const loginMutation = useMutation(
    (login: Login) => signIn(login),
    {
      onSuccess: (res:any) => {
        console.log(res)
        toast("SignIn successful");
      },
      onError: (error: any) => {
        toast(error.response.data.error);
        console.error("Error signing In:", error.response.data.error);
      },
    }
  );


  async function handleSubmit(e:any){
    e.preventDefault();
    try {

      loginScheme.parse({ email, password });
      await loginMutation.mutateAsync({
        email,
        password,
      });
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.log(error.errors);
      } else {
        toast(error.response.data);
      }
    }
  }
  return (

    <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}>
    <div className={[styles.screen, , styles.center].join(" ")}>
      <div className={[styles.mainWrapper].join(" ")}>
        <h1></h1>
        <div>
          <h1 className={[styles.heading].join(" ")}>Welcome</h1>
          <p className={[styles.paragraph].join(" ")}>
            Hi, Enter your details to get login to your account
          </p>
        </div>
        <form onSubmit = {handleSubmit} className={[styles.form].join(" ")}>
          <div>
            <div className={[styles.inputWrapper, styles.center].join(" ")}>
              <div className={[styles.center].join(" ")}>
                <CiUser></CiUser>
              </div>
              <input
                type="text"
                placeholder="Email"
                className="outline-none border-none"
                value = {email}
                onChange = {(e)=>{setEmail(e.target.value)}}
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
                onChange = {(e)=> setPassword(e.target.value)}
              />
            </div>
            <hr />
          </div>
          <button className={[styles.signupButton].join(" ")}
                      disabled={loginMutation.isLoading}> 
                      {loginMutation.isLoading ? "Signing In..." : "Login"}
                      </button>
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
    </motion.div>
  )
}

export default SignIn;
