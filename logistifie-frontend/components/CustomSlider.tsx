"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SampleNextArrow = (props: any) => {
  const { onClick, type } = props;
  return (
    <div onClick={onClick}>
      <span
        className={`hidden cursor-pointer lg:block w-10 h-10 absolute ${
          type === "prev" ? "top-16 -left-10" : "top-16 -right-10"
        }`}
      >
        <Image
          src={type === "prev" ? "/left.png" : "/right.png"}
          alt={type}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-full w-full h-full object-cover"
        />
      </span>
    </div>
  );
};

export const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow type="next" />,
    prevArrow: <SampleNextArrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="rounded-lg bg-[#303d48] m-4 p-4">
          <p className="text-sm">I enjoyed it very much!</p>
          <p className="text-xs font-thin">
            At first I was lazy but that thought disappeared after being
            accompanied by a pleasant guide being accompanied by a pleasant
            guide.
          </p>
          <div className="mt-4 flex items-center">
            <div className="mr-2">
              <div className="w-6 h-6">
                <Image
                  src={"/usa.png"}
                  alt={"USA"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-full w-full h-full object-cover "
                />
              </div>
            </div>

            <p className="font-thin text-xs">Kathryn Murphy</p>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-lg bg-[#303d48] m-4 p-4">
          <p className="text-sm">I enjoyed it very much!</p>
          <p className="text-xs font-thin">
            At first I was lazy but that thought disappeared after being
            accompanied by a pleasant guide being accompanied by a pleasant
            guide.
          </p>
          <div className="mt-4 flex items-center">
            <div className="mr-2">
              <div className="w-6 h-6">
                <Image
                  src={"/usa.png"}
                  alt={"USA"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-full w-full h-full object-cover "
                />
              </div>
            </div>

            <p className="font-thin text-xs">Kathryn Murphy</p>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-lg bg-[#303d48] m-4 p-4">
          <p className="text-sm">I enjoyed it very much!</p>
          <p className="text-xs font-thin">
            At first I was lazy but that thought disappeared after being
            accompanied by a pleasant guide being accompanied by a pleasant
            guide.
          </p>
          <div className="mt-4 flex items-center">
            <div className="mr-2">
              <div className="w-6 h-6">
                <Image
                  src={"/usa.png"}
                  alt={"USA"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-full w-full h-full object-cover "
                />
              </div>
            </div>

            <p className="font-thin text-xs">Kathryn Murphy</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
