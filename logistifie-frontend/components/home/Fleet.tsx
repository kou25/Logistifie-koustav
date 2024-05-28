import Image from "next/image";
import { IoCarOutline } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { RiShieldUserLine, RiSteeringLine } from "react-icons/ri";
import { CustomSlider } from "../CustomSlider";
import { Tab, Tabs } from "../Tabs";
import { CustomCarSlider } from "../CustomCarSlider";

export const Fleet = () => {
  // do same for Electric, SUV, MVP, Sprinter
  const allCars = [
    { id: "bc", name: "Business Class" },
    { id: "fc", name: "First Class" },
    { id: "lc", name: "Luxury Class" },
    { id: "ec", name: "Electric" },
    { id: "suv", name: "SUV" },
    { id: "mvp", name: "MVP" },
    { id: "sprinter", name: "Sprinter" }
  ];
  return (
    <section className="bg-lf-400 pb-8">
      <div className=" container py-8  mx-auto">
        <div className="flex  items-center flex-col mt-12 text-lf-25">
          <p className="text-sm">Our Fleet</p>
          <p className="text-lg text-center md:text-left md:text-3xl">
            Introducing Our Luxury Cars Handpicked for Your Comfort
          </p>
          <div className="mt-1 w-10 h-[1px] rounded-lg bg-lf-25" />
        </div>
        <div className="my-4">
          <Tabs>
            {allCars.map((item) => (
              <Tab label={item.name} key={item.id}>
                <div className=""></div>
              </Tab>
            ))}
          </Tabs>
          {/* will modify later */}
          <CustomCarSlider />
        </div>
      </div>
      <div className="mt-4 container p-12  mx-auto bg-lf-600 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-auto w-auto mr-8">
          <Image
            src={"/driver.png"}
            alt={"driver"}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 ">
          <div className="text-lf-25">
            <p className="text-sm mb-2">Who We Are</p>
            <p className="text-2xl leading-5">
              Roldrive your trusted Travel Partner
            </p>
            <p className="text-xs font-thin">
              Embark on a journey of luxury and convenience with our
              chauffeur-driven car hire service.
            </p>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lf-25">
              <div className="pr-8">
                <RiShieldUserLine className="text-xl mb-4" />
                <p className="text-sm mb-2">Safe & Discreet</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ornare
                  elementum sed vel lacus commodo sit. Vestibulum turpis varius
                  neque tellus et gravida ac.
                </p>
              </div>
              <div className="pr-8">
                <RiSteeringLine className="text-xl mb-4" />
                <p className="text-sm mb-2">Professional Chauffeur </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ornare
                  elementum sed vel lacus commodo sit. Vestibulum turpis varius
                  neque tellus et gravida ac.
                </p>
              </div>
              <div className="pr-8">
                <LuHeartHandshake className="text-xl mb-4" />
                <p className="text-sm mb-2">Trust & Reliability</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ornare
                  elementum sed vel lacus commodo sit. Vestibulum turpis varius
                  neque tellus et gravida ac.
                </p>
              </div>
              <div className="pr-8">
                <IoCarOutline className="text-xl mb-4" />
                <p className="text-sm mb-2">A Great Fleet</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Habitasse ornare
                  elementum sed vel lacus commodo sit. Vestibulum turpis varius
                  neque tellus et gravida ac.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container py-8  mx-auto">
        <div className="flex  items-center flex-col mt-12 text-lf-25 mb-6">
          <p className="text-sm">Client stories</p>
          <p className="text-lg text-center md:text-left md:text-3xl">
            See how our clients feel delighted
          </p>
        </div>
        <CustomSlider />
      </div>
    </section>
  );
};
