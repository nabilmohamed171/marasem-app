"use client";
import { useState, useEffect } from "react";
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

const NewArtwork = () => {
  const [cardStates, setCardStates] = useState([]);

  const artworks = [
    {
      id: 1,
      image: "/images/22.jpeg",
      artistImage: "/images/avatar2.png",
      artistName: "Omar Mohsen",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      id: 2,
      image: "/images/33.jpeg",
      artistImage: "/images/avatar2.png",
      artistName: "Omar Mohsen",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      id: 3,
      image: "/images/44.jpeg",
      artistImage: "/images/avatar2.png",
      artistName: "Omar Mohsen",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      id: 4,
      image: "/images/77.jpeg",
      artistImage: "/images/avatar2.png",
      artistName: "Omar Mohsen",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      id: 5,
      image: "/images/66.jpeg",
      artistImage: "/images/avatar2.png",
      artistName: "Omar Mohsen",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
    {
      id: 6,
      image: "/images/88.jpeg",
      artistImage: "/images/avatar2.png",
      artistName: "Omar Mohsen",
      title: "Lorem Ipsum Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      productLink: "/product-details",
      artistLink: "/artist-profile",
    },
  ];

  useEffect(() => {
    const initialStates = artworks.map(() => ({
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
    <div className="new-artwork">
      <div className="container">
        <div className="see-all">
          <h2>New Artwork</h2>
          <Link href="/collections">
            See All <IoIosArrowForward />
          </Link>
        </div>
        <div className="new-artwork">
          <Swiper
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="mySwiper"
          >
            {artworks.map((artwork, index) => (
              <SwiperSlide key={artwork.id}>
                <div className="new-artwork-card">
                  <div className="new-artwork-info">
                    <div className="image-card">
                      <div className="new-artwork-image">
                        <Image
                          src={artwork.image}
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
                            <Link href={artwork.artistLink}>
                              <Image
                                src={artwork.artistImage}
                                alt="avatar"
                                width={50}
                                height={50}
                                quality={70}
                                loading="lazy"
                              />
                            </Link>
                          </div>
                          <Link
                            href={artwork.artistLink}
                            className="reser-link"
                          >
                            <span>{artwork.artistName}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link href={artwork.productLink} className="product-info">
                      <h2>{artwork.title}</h2>
                      <p>{artwork.description}</p>
                      <h3>{artwork.price}</h3>
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

export default NewArtwork;
