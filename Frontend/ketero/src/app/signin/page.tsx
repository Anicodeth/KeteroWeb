import { FaUser } from "react-icons/fa6";
import Image from 'next/image';
import Button from "../../components/shared/buttons/button";
import styles from "../../components/shared/buttons/button.module.css";
import logo from "../../Assets/logo.png";

export default function SignIn() {
    
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={80} />
      </div>

      <div className={styles.welcome}>
        <h1 className={styles.heading}>Welcome!</h1>
        <p className={styles.description}>Hi, Enter your details to get sign in to you account</p>

            <div className={styles.inputContainer}>
                <div className={styles.inputWrapper}>
                    <FaUser className={styles.icon}/>
                    <input type="email" name="email" id="email" title="Email" placeholder="Enter email/Phone no"
                    className={styles.input} />
                </div>
            </div>

            
        </div>
        <div className={styles.loginContainer}>
          <div className={styles.flexContainer}>
              <button className={styles.loginButton}>Login</button>
          </div>
        </div>
        <div className={styles.socialLogin}>
            <p className={styles.socialLoginText}>Or Sign In via</p>
            <div className={styles.socialButtons}>

                <Button  name="google" link="/google.com" />
                <Button  name="apple" link="/apple" />
                <Button  name="facebook" link="/facebook" />
            </div>
        </div>

    </div>
  )
}