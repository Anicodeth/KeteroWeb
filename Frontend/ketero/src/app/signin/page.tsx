"use client"
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";

import styles from "./SignIn.module.css";
import Link from "next/link";
import { z, ZodError } from "zod";
import { Login, PhoneLogin } from "@/models/Login";
import { signIn } from "../../services/AuthService";
import { toast } from "sonner";
import { useMutation, QueryClient, QueryClientProvider } from "react-query";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState("email"); // Default to email

  return (
    <QueryClientProvider client={queryClient}>
      <Form
        router={router}
        loginMethod={loginMethod}
        setLoginMethod={setLoginMethod}
      />
    </QueryClientProvider>
  );
};

interface FormProps {
  router: any; // Update the type to match your router's type
  loginMethod: string;
  setLoginMethod: (method: string) => void;
}

function Form({ router, loginMethod, setLoginMethod }: FormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Login");

  const loginScheme = z.object({
    email: z.string().email(),
    phone: z.string().min(6),
    password: z.string().min(6),
  });

  const loginMutation = useMutation((login: Login | PhoneLogin) => signIn(login), {
    onSuccess: (role: string) => {
      router.push(`/${role.toLowerCase()}`);

      toast("SignIn successful");
    },
    onError: (error: any) => {
      toast(error.response.data.error);
    },
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      if (loginMethod === "email") {
        loginScheme.parse({ email, password });
        await loginMutation.mutateAsync({
          email,
          password,
        });
      } else {
        loginScheme.parse({ phone, password });
        await loginMutation.mutateAsync({
          phone,
          password,
        });
      }
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.log(error.errors);
      } else {
        if (error.response) {
          toast(error.response.data);
        } else {
          toast("Network Error");
        }
      }
    } finally {
      setButtonText("Login");
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className={[styles.screen, , styles.center].join(" ")}>
        <div className={[styles.mainWrapper].join(" ")}>
          <h1></h1>
          <div>
            <h1 className={[styles.heading].join(" ")}>Welcome</h1>
            <p className={[styles.paragraph].join(" ")}>
              Hi, Enter your details to get logged in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className={[styles.form].join(" ")}>
            
            <div className="flex flex-row items-center justify-between ">
              <div>
                <p>Login Method</p>
              </div>
              <label>
                <input
                  type="radio"
                  value="email"
                  checked={loginMethod === "email"}
                  onChange={() => setLoginMethod("email")}
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  value="phone"
                  checked={loginMethod === "phone"}
                  onChange={() => setLoginMethod("phone")}
                />
                Phone
              </label>
            </div>
            <div>
              <div className={[styles.inputWrapper, styles.center].join(" ")}>
                <div className={[styles.center].join(" ")}>
                  <CiUser></CiUser>
                </div>
                <input
                  type="text"
                  placeholder={loginMethod === "email" ? "Email" : "Phone"}
                  className="outline-none border-none"
                  value={loginMethod === "email" ? email : phone}
                  onChange={(e) => {
                    loginMethod === "email"
                      ? setEmail(e.target.value)
                      : setPhone(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <hr />
            </div>
            <button
              className={[styles.signupButton].join(" ")}
              disabled={loginMutation.isLoading}
            >
              {loginMutation.isLoading ? "Signing In..." : buttonText}
            </button>
            <p className={styles.login}>
              Didn't you have an account ?{" "}
              <Link href="/signup">
                <span>Signup</span>
              </Link>
            </p>
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
                <AiOutlineApple
                  className={[styles.icon].join(" ")}
                  size={20}
                  color="grey"
                />
              </div>
              <div className={[styles.containerIcon, styles.center].join(" ")}>
                <FaFacebookSquare
                  className={[styles.icon].join(" ")}
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
}

export default SignIn;
