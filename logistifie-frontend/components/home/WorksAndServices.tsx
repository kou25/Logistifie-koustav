import Image from "next/image";
import React from "react";
import { BiDetail } from "react-icons/bi";
import { FaCar } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";

export const WorksAndServices = () => {
  const services = [
    {
      id: 1,
      url: "/airport.png",
      label: "Airport Transfer",
      summary:
        "Our Airport transfer is smooth and effortless. Whether you need to be picked up from your hotel and dropped off at the airport or vice versa, our friendly and courteous vice versa, our professional chauffeurs will ensure your journey is comfortable and stress-free."
    },
    {
      id: 2,
      url: "/corporate.png",
      label: "Corporate Chauffeurs",
      summary:
        "With RolDrive, you'll make a lasting impression from the moment you step out of our chauffeur driven vehicles. Let us help you make a statement and command the boardroom Our corporate chauffeurs are dependable, efficient, and dedicated to exceeding your expectations."
    },
    {
      id: 3,
      url: "/wedding.png",
      label: "Wedding Transfers",
      summary:
        "We understand the importance of making this special day flawless, which is why we offer a range of chauffeur-driven vehicles to choose from, including luxury brands such as Rolls Royce, Maybach, and Bentley. Our vehicles add an extra touch of elegance to your celebration."
    },
    {
      id: 4,
      url: "/private.png",
      label: "Private Jet Transfers",
      summary:
        "Our experienced private chauffeur service will safely transport you from the landing terminal of your private helicopter or airliner to your hotel or business meeting. Our fleet is equipped with complimentary packages to ensure a comfortable and enjoyable experience."
    },
    {
      id: 5,
      url: "/event.png",
      label: "Event Transfers",
      summary:
        "We provide transportation services for all types of social, cultural, and sports events in and around the city. Whether you're attending a private party or a large-scale gathering, our event transfer cars are stylish, sophisticated, and comfortable, ensuring a safe and special experience. "
    },
    {
      id: 6,
      url: "/sight.png",
      label: "Sightseeing Tours",
      summary:
        "With our hourly chauffeur service you can select from our extensive and diverse fleet of vehicles to ensure that your journey is comfortable and memorable. Experience the luxurious and stress-free transportation solutions of RolDrive as our skilled chauffeurs act as your guide on your trips."
    }
  ];
  return (
    <section className="bg-lf-600 h-full">
      <div className=" container py-8  mx-auto">
        <div className="flex  items-center flex-col mt-12 text-lf-25">
          <p className="text-sm">How it Works</p>
          <p className="text-3xl">
            Book Your Chauffeur Experience in Three Simple Steps
          </p>
          <div className="mt-1 w-10 h-[1px] rounded-lg bg-lf-25" />
          <div className="flex justify-between mt-12 text-lf-25 w-10/12">
            <div className="w-1/5 flex flex-col items-center">
              <div className="bg-lf-400 rounded-md h-24 w-24 flex justify-center items-center">
                <BiDetail className="text-3xl" />
              </div>
              <p className="mt-4 mb-2">Enter Trip Details</p>
              <p className="text-xs text-center">
                Enter your destination, select your date and time, and explore
                our fleet
              </p>
            </div>
            <div className="w-[15%] flex flex-col justify-center items-center">
              <Image src="/arrow.png" alt="hero" width={200} height={10} />
            </div>
            <div className="w-1/5 flex flex-col items-center">
              <div className="bg-lf-400 rounded-md h-24 w-24 flex justify-center items-center">
                <FaCar className="text-3xl" />
              </div>
              <p className="mt-4 mb-2">Vehicle Of Choice</p>
              <p className="text-xs text-center">
                Choose from our extensive fleet for a vehicle that suits you
                best
              </p>
            </div>
            <div className="w-[15%] flex flex-col justify-center items-center">
              <Image src="/arrow.png" alt="hero" width={200} height={10} />
            </div>
            <div className="w-1/5 flex flex-col items-center">
              <div className="bg-lf-400 rounded-md h-24 w-24 flex justify-center items-center">
                <FiCheckCircle className="text-3xl" />
              </div>
              <p className="mt-4 mb-2">Confirm Your Ride</p>
              <p className="text-xs text-center">
                The final stage to your booking process where you confirm the
                ride.
              </p>
            </div>
          </div>
        </div>
        <div className="my-20 w-full h-[0.5px] rounded-lg bg-lf-200" />
        <div className="flex  items-center flex-col mt-12 text-lf-25">
          <p className="text-sm">Our Services</p>
          <p className="text-3xl">
            Tailored Chauffeur Services for Your Every Need
          </p>
          <div className="mt-1 w-10 h-[1px] rounded-lg bg-lf-25" />
          <p className="mt-8 text-sm text-center">
            Indulge in an unparalleled chauffeur experience with our tailored
            services designed to meet your unique requirements. Whether you're
            in pursuit of seamless airport transfers, corporate travel, or
            special events, our chauffeur services are crafted to elevate your
            journey. Embark on a journey where every detail is tailored to
            perfection. Browse our services now and elevate your transportation
            experience with our exclusive chauffeur services.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="min-h-44 h-auto w-[350px] bg-lf-300  rounded-lg shadow-md flex flex-col cursor-pointer"
              >
                <div>
                  <Image
                    src={service.url}
                    alt={service.label}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-t-lg w-full h-36 object-cover"
                  />
                </div>
                <div className="p-4 px-6">
                  <h3 className="text-base font-medium text-white">
                    {service.label}
                  </h3>
                  <p className="text-xs mt-4 mb-2 text-gray-300 ">
                    {service.summary}
                  </p>
                  <div className="text-xs text-lf-50 hover:underline cursor-pointer">
                    <p>{`Learn more >`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
