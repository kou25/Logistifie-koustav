import Image from "next/image";
import React from "react";

export const PopularTrips = () => {
  return (
    <section className="bg-lf-200 h-full">
      <div className="container p-12 my-16  mx-auto">
        <div className="flex  items-center flex-col mt-4 text-lf-25">
          <p className="text-sm ">Popular trips</p>
          <p className="text-2xl">Explore Our Most Sought-After Destinations</p>
          <div className="mt-1 w-10 h-[1px] rounded-lg bg-lf-25" />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-[#384957] rounded-lg p-4 text-lf-25 flex items-center"
            >
              <div className="w-10 h-10 mr-2">
                <Image
                  src={"/heart.png"}
                  alt={"heart"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded w-full h-full object-cover"
                />
              </div>
              <p className="text-sm">{`London > Paris`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
