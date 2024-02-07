/* Button.tsx */
import React from 'react';
import Link from 'next/link';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import styles from './button.module.css';

const icons = {
    google: <FaGoogle className={styles.google} />,
    apple: <FaApple className={styles.apple} />,
    facebook: <FaFacebook className={styles.facebook} />,
};

interface ButtonProps {
    name: 'google' | 'apple' | 'facebook';
    link?: string;
}

const Button: React.FC<ButtonProps> = ({name, link="/" }) => {
    return (
        <Link href={link} >
            <button className={styles.button}>
                {icons[name]}
            </button>
        </Link>
    );
};

export default Button;