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
          type === "prev"
            ? "-bottom-12 left-[450px]"
            : "-bottom-12 right-[600px]"
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

export const CustomCarSlider = () => {
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0",
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow type="next" />,
    prevArrow: <SampleNextArrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0",
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "0",
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
          adaptiveHeight: true
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="w-64">
          <div className="w-60 h-60" id="active">
            <Image
              src={"/car.png"}
              alt={"car"}
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-full object-contain "
            />
          </div>
          <p className="text-center">Audi A6</p>
        </div>
      </div>
      <div>
        <div className="w-64">
          <div className="w-60 h-60" id="active">
            <Image
              src={"/car.png"}
              alt={"car"}
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-full object-contain "
            />
          </div>
          <p className="text-center">Mercedes Benz E class</p>
        </div>
      </div>
      <div>
        <div className="w-64">
          <div className="w-60 h-60" id="active">
            <Image
              src={"/car.png"}
              alt={"car"}
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-full object-contain "
            />
          </div>
          <p className="text-center">BMW 5 series</p>
        </div>
      </div>
      <div>
        <div className="w-64">
          <div className="w-60 h-60" id="active">
            <Image
              src={"/car.png"}
              alt={"car"}
              width={0}
              height={0}
              sizes="100vw"
              className=" w-full h-full object-contain "
            />
          </div>
          <p className="text-center">Mercedes Benz E class</p>
        </div>
      </div>
    </Slider>
  );
};
