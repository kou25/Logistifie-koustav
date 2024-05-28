import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { SearchRide } from "./SearchRide";

export const Hero = () => {
  return (
    <section className="w-screen h-[80vh] md:h-[700px]  bg-hero bg-no-repeat bg-cover bg-center px:2 lg:px-10 mt-2">
      <div className="flex flex-col justify-between  h-full mx-4 lg:mx-16 pb-8 pt-4">
        <div className="relative">
          <h1 className="textlg md:text-2xl lg:text-5xl text-white font-bold mb-1">
            Premium Chauffeur Service
          </h1>
          <p className="text-sm md:text-base">
            Your exclusive and dependable chauffeur service indulgence
          </p>
          <SearchRide />
        </div>
        <div>
          <p>Do you want to customise your booking?</p>
          <p className="font-thin text-sm">
            We offer customised bookings for any location, from bulk or
            intercity trips to monthly packages.
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center mt-2">
            <small className="mr-4 text-sm font-thin">Contact us now</small>
            <div className="flex items-center text-lf-50">
              <LuPhone className="mr-2" />
              <p className="text-sm mr-4 ">+44 (0) 207 112 8101</p>
            </div>
            <div className="flex items-center text-lf-50">
              <MdOutlineMail className="mr-2" />
              <p className="text-sm mr-4 ">booking@roldrive.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
