import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { LanguageSelect } from "./LanguageSelect";

const links = [
  { name: "Home", url: "/" },
  { name: "Blogs", url: "/blogs" }
];

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 w-full  px-2 lg:px-20 pl-2 lg:pl-[105px] shadow-md">
      <Link href={"/"} className="w-2/5 lg:w-1/5">
        <Image src="/logo.svg" width={155} height={50} alt="logo" />
      </Link>
      <div className="w-2/5 lg:w-3/6">
        <div className="flex items-center ">
          {links.map((item) => (
            <Link
              className="hover:text-lf-50 mr-6"
              href={item.url}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/2 lg:w-[30%] hidden md:flex justify-end items-center">
        <div className="hidden lg:block mr-5">
          <Image src="/mobile.png" width={24} height={24} alt="mobile" />
        </div>
        <div className="mr-5 hidden lg:flex justify-between items-center">
          <Image src="/wp.png" width={20} height={20} alt="whatsapp" />
          <p className="ml-2 text-xs lg:text-sm">Contact Us</p>
        </div>
        <LanguageSelect />
        <Button label="Sign In" />
      </div>
    </nav>
  );
};
