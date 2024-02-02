import React from 'react';
import Link from 'next/link';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';

type IconType = {
    [key: string]: JSX.Element;
};

const icons: IconType = {
    google: <FaGoogle className={`text-red-500`}/>,
    apple: <FaApple className={`text-white-500`}/>,
    facebook: <FaFacebook className={`text-blue-500`}/>,
};

const Button = ({name, link="/" }: {  name: string; link?: string }) => {
    return (
        <Link href={link}>
            
            <button 
                className={`w-24 h-11 rounded-full border-2 border-black-500 flex justify-center  items-center`}
            >
                {icons[name]}
            </button>
        
        </Link>
    );
};

export default Button;