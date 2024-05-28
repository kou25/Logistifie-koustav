import { FaRegClock } from "react-icons/fa6";
import { PiPathBold } from "react-icons/pi";
import { SearchInput } from "../SearchInput";
import { LuPlusCircle } from "react-icons/lu";
import { Button } from "../Button";

export const SearchRide = () => {
  return (
    <div className="absolute h-[520px] w-[488px] rounded-lg top-10 right-16 bg-custom-gradient backdrop-blur-sm shadow-custom-shadow p-8">
      <div className="flex justify-between items-center">
        <div className="w-1/2 bg-[#223544] cursor-pointer text-sm rounded-2xl border border-lf-300 flex justify-center items-center p-1.5 mr-2">
          <PiPathBold className="mr-2" /> Transfer
        </div>
        <div className="w-1/2 bg-[#223544] text-lf-25 cursor-pointer text-sm rounded-2xl border border-lf-300 flex justify-center items-center p-1.5">
          <FaRegClock className="mr-2" /> Hourly
        </div>
      </div>
      <div className="flex flex-col justify-between  mt-4 ">
        <SearchInput
          label="Pick Up"
          placeholder="Enter pick up location"
          endIcon
        />
        <SearchInput
          label="Drop Off"
          placeholder="Enter drop off location"
          endIcon
        />
      </div>
      <div className="flex items-center text-lf-50  mt-1 cursor-pointer ">
        <LuPlusCircle />
        <p className="text-xs ml-2">Add Stop</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <SearchInput label="Date" placeholder="Pick Date" />
        <SearchInput label="Time" placeholder="Pick Time" />
      </div>
      <div className="my-4 h-[1px] w-full bg-[#B2B2B2]  mb-6" />
      <div className="flex items-center text-lf-50  cursor-pointer mb-4">
        <LuPlusCircle />
        <p className="text-xs ml-2">Add Return Journey</p>
      </div>
      <Button
        label="Search Ride"
        bgColor="bg-[#EC5C29]"
        width="w-full"
        height="h-12"
        color="text-white"
      />
    </div>
  );
};
