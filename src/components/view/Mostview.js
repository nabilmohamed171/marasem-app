"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "./most-views.css";

const MostReview = () => {
  const [cardStates, setCardStates] = useState([]);
  const products = [
    {
      image: "/images/view 1.png",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      artist: "Omar Mohsen",
      artistImage: "/images/avatar2.png",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      image: "/images/view 2.png",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      artist: "Omar Mohsen",
      artistImage: "/images/avatar2.png",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      image: "/images/4.png",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      artist: "Omar Mohsen",
      artistImage: "/images/avatar2.png",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      image: "/images/view 1.png",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      artist: "Omar Mohsen",
      artistImage: "/images/avatar2.png",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      image: "/images/view 2.png",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      artist: "Omar Mohsen",
      artistImage: "/images/avatar2.png",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      image: "/images/4.png",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      artist: "Omar Mohsen",
      artistImage: "/images/avatar2.png",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
  ];

  useState(() => {
    const initialStates = products.map(() => ({
      heartClicked: false,
      plusClicked: false,
    }));
    setCardStates(initialStates);
  }, []);

  const handleHeartClick = (index) => {
    const updatedStates = [...cardStates];
    updatedStates[index].heartClicked = !updatedStates[index].heartClicked;
    setCardStates(updatedStates);
  };

  const handleAddToCartClick = (index) => {
    const updatedStates = [...cardStates];
    updatedStates[index].plusClicked = !updatedStates[index].plusClicked;
    setCardStates(updatedStates);
  };

  return (
    <div className="most-views">
      <div className="container">
        <div className="see-all">
          <h2>MOST VIEWS</h2>
          <Link href="/collections">
            See All <IoIosArrowForward />
          </Link>
        </div>
        <div className="most-views">
          <Swiper
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="most-views-card">
                  <div className="most-views-info">
                    <div className="image-card">
                      <div className="most-views-image">
                        <Image
                          src={product.image}
                          alt="image"
                          width={312}
                          height={390}
                          quality={70}
                          loading="lazy"
                        />
                      </div>
                      <div className="overley"></div>
                      <div className="overley-info">
                        <div className="add-cart">
                          <span
                            className="cart-shopping"
                            onClick={() => handleAddToCartClick(index)}
                            style={{
                              backgroundColor: cardStates[index]?.plusClicked
                                ? "#f1ad56"
                                : "#00000080",
                            }}
                          >
                            <HiOutlineShoppingBag
                              style={{
                                color: cardStates[index]?.plusClicked
                                  ? "black"
                                  : "white",
                              }}
                            />
                          </span>
                          <span
                            className="plus"
                            style={{
                              backgroundColor: cardStates[index]?.plusClicked
                                ? "#f1ad56"
                                : "#f1ad56",
                            }}
                          >
                            {cardStates[index]?.plusClicked ? (
                              <IoMdCheckmark style={{ color: "black" }} />
                            ) : (
                              <GoPlus />
                            )}
                          </span>
                          <span
                            className="heart"
                            onClick={() => handleHeartClick(index)}
                          >
                            {cardStates[index]?.heartClicked ? (
                              <FaHeart style={{ color: "white" }} />
                            ) : (
                              <FaRegHeart />
                            )}
                          </span>
                        </div>
                        <div className="user-art">
                          <div className="user-image">
                            <Link href={product.artistLink}>
                              <Image
                                src={product.artistImage}
                                alt="avatar"
                                width={50}
                                height={50}
                                quality={70}
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <Link
                            href={product.artistLink}
                            className="reser-link"
                          >
                            <span>{product.artist}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link href={product.productLink} className="product-info">
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <h3>{product.price}</h3>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MostReview;
