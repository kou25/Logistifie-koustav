import { LuPhone } from "react-icons/lu";
import { Button } from "./Button";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { ImLinkedin2 } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="bg-lf-600 p-20 px-28">
      <div className="flex justify-center items-center flex-col text-lf-25 mb-6">
        <p className="font-thin text-sm">Let’s get in touch!</p>
        <p className="font-medium text-xl">
          Contact us for quick and friendly support.
        </p>
        <div className="mt-1 w-10 h-[1px] rounded-lg bg-lf-25" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-6 ">
            <div className="flex items-center text-lf-50 mb-2">
              <LuPhone className="mr-2" />
              <p className="text-sm mr-4 ">+44 (0) 207 112 8101</p>
            </div>
            <div className="flex items-center text-lf-50">
              <MdOutlineMail className="mr-2" />
              <p className="text-sm mr-4 ">booking@roldrive.com</p>
            </div>
          </div>
          <div className="text-lf-25 w-3/12">
            <p className="text-lg font-thin">Connect with us</p>
            <div className="mt-2 flex justify-between mr-2">
              <FiFacebook />
              <FaXTwitter />
              <IoLogoInstagram />
              <FaPinterestP />
              <ImLinkedin2 />
            </div>
          </div>
        </div>
        <div className="w-8/12 px-10">
          <div className="flex flex-col justify-between mb-3">
            <label className="text-xs mb-1 text-lf-25 font-thin">
              First Name
            </label>
            <input
              className="h-8 rounded-md p-2 border border-lf-200 bg-lf-300 text-sm"
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex flex-col justify-between mb-5">
            <label className="text-xs mb-1 text-lf-25 font-thin">
              Last Name
            </label>
            <input
              className="h-8   rounded-md p-2 border border-lf-200 bg-lf-300 text-sm"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <Button
              label="Submit"
              bgColor="bg-lf-100"
              width="w-28"
              height="h-12"
              color="text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
