"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider-cate.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const sliderItems = [
  { src: "/images/slider 1.png", alt: "Leather Craft", title: "Leather Craft" },
  { src: "/images/slider 2.png", alt: "Ceramics", title: "Ceramics" },
  { src: "/images/slider 3.png", alt: "Fashion Art", title: "Fashion Art" },
  { src: "/images/slider 4.png", alt: "Paintings", title: "Paintings" },
  { src: "/images/slider 5.png", alt: "Egyptians", title: "Egyptians" },
  { src: "/images/slider 6.png", alt: "Calligraphy", title: "Calligraphy" },
  { src: "/images/slider 7.png", alt: "Illustration", title: "Illustration" },
  { src: "/images/slider 8.png", alt: "Furniture", title: "Furniture" },
  { src: "/images/slider 9.png", alt: "Sculptures", title: "Sculptures" },
  { src: "/images/slider 1.png", alt: "Leather Craft", title: "Leather Craft" },
  { src: "/images/slider 2.png", alt: "Ceramics", title: "Ceramics" },
  { src: "/images/slider 3.png", alt: "Fashion Art", title: "Fashion Art" },
  { src: "/images/slider 4.png", alt: "Paintings", title: "Paintings" },
  { src: "/images/slider 5.png", alt: "Egyptians", title: "Egyptians" },
  { src: "/images/slider 6.png", alt: "Calligraphy", title: "Calligraphy" },
  { src: "/images/slider 7.png", alt: "Illustration", title: "Illustration" },
  { src: "/images/slider 8.png", alt: "Furniture", title: "Furniture" },
];

export const SliderCategory = () => {
  return (
    <div className="container">
      <div className="slider-category">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 9,
              spaceBetween: 10,
            },
          }}
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link className="reser-link" href="#">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={156}
                  height={156}
                  quality={100}
                  loading="lazy"
                />
                <h3>{item.title}</h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};
