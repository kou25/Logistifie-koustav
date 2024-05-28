import Image from "next/image";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export const Locations = () => {
  const locations = [
    { name: "London", image: "/london.png", flag: "/london-flag.png" },
    { name: "Paris", image: "/paris.png", flag: "/paris-flag.png" },
    { name: "New York", image: "/new-york.png", flag: "/usa.png" },
    { name: "Dubai", image: "/dubai.png", flag: "/uae.png" },
    { name: "Tokyo", image: "/tokyo.png", flag: "/japan.png" }
  ];
  return (
    <section className="bg-lf-200">
      <div className="container p-12  mx-auto">
        <div className="flex  items-center flex-col mt-4 text-lf-25">
          <p className="text-sm text-[#828282]">Our Presence</p>
          <p className="text-2xl">Locations we serve</p>
          <div className="mt-1 w-10 h-[1px] rounded-lg bg-lf-25" />
        </div>
        <div className="flex justify-between items-center my-6">
          <div className="w-10 h-10">
            <Image
              src={"/left.png"}
              alt={"left"}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          {locations.map((item) => (
            <div key={item.name}>
              <div className="w-48 h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center text-lf-25 mt-2">
                <div className="w-5 h-5">
                  <Image
                    src={item.flag}
                    alt={item.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-full w-full h-full object-cover "
                  />
                </div>{" "}
                <p className="ml-2">{item.name}</p>
              </div>
            </div>
          ))}
          <div className="w-10 h-10">
            <Image
              src={"/right.png"}
              alt={"right"}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center my-6">
          <div className="text-lf-25 w-3/6">
            <h3 className="text-2xl mb-6">Looking for more locations?</h3>
            <p className="text-sm">
              Explore our expanding locations and book your customized trip,
              from bulk bookings to monthly plans. Contact us now!
            </p>
            <div className="mt-6 flex items-center text-lf-50">
              <div className="flex items-center ">
                <LuPhone className="mr-2" />
                <p className="text-sm mr-4 ">+44 (0) 207 112 8101</p>
              </div>
              <span className="mr-2 text-lf-25">|</span>
              <div className="flex items-center ">
                <MdOutlineMail className="mr-2" />
                <p className="text-sm mr-4 ">booking@roldrive.com</p>
              </div>
            </div>
          </div>
          <div className="w-2/5 h-auto">
            <Image
              src={"/map.png"}
              alt={"map"}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
