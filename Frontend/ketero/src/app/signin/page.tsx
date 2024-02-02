import { FaUser } from "react-icons/fa6";
import Button from "../../components/shared/buttons/button";

export default function SignIn() {
    
  return (
    <div className="max-w-sm mx-auto h-screen sm:h bg-white text-black flex flex-col p-5 justify-center">
      <div className="text-6xl">
        logo
      </div>

      <div className="">
        <h1 className="font-semibold text-3xl py-3">Welcome!</h1>
        <p className="text-customColor text-sm">Hi, Enter your details to get sign in <br />to you account</p>

            <div className="border-b  border-b-black pt-5 ">
                <div className="flex items-center py-2">
                    <FaUser className="mr-2 "/>
                    <input type="email" name="email" id="email" title="Email" placeholder="Enter email/Phone no"
                    className="border-none focus:outline-none " />
                </div>
            </div>

            
        </div>
        <div className="">
            <button className="w-full h-12 bg-custompurple rounded-full text-white my-10  backdrop-blur-md" >Login</button>
        </div>
        <div className="mt-14">
            <p className="font-manrope text-sm leading-6 text-gray-500 mb-2">Or Sign In via</p>
            <div className="flex flex-wrap space-x-0.5">

                <Button  name="google" link="/google.com" />
                <Button  name="apple" link="/apple" />
                <Button  name="facebook" link="/facebook" />
            </div>
        </div>

    </div>
  )
}
