import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import Image from "next/image";
import "./cards-allartworks.css";

const CardsAllartworks = () => {
  const [cardStates, setCardStates] = useState([]);
  const artworks = [
    {
      id: 1,
      image: "/images/view 1.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 2,
      image: "/images/view 2.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 3,
      image: "/images/view 3.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 4,
      image: "/images/view 4.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 5,
      image: "/images/view 5.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 6,
      image: "/images/view 1.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 7,
      image: "/images/view 2.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 8,
      image: "/images/view 3.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 9,
      image: "/images/view 4.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
    {
      id: 10,
      image: "/images/view 5.png",
      artist: "Omar Mohsen",
      title: "Lorem Ipsum",
      description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum,",
      price: "EGP 2,500",
      avatar: "/images/avatar.png",
    },
  ];

  useState(() => {
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
    <div className="cards-allartworks">
      <div className="container">
        <h2>Related Artworks</h2>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {artworks.map((artwork, index) => (
                <div key={artwork.id} className="col-md-4 col-6">
                  <div className="card-image">
                    <div className="overley"></div>
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      width={312}
                      height={390}
                      quality={70}
                      loading="lazy"
                    />
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
                                : "#FFF",
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
                            <GoPlus style={{ color: "black" }} />
                          )}
                        </span>
                        <span
                          className="heart"
                          onClick={() => handleHeartClick(index)}
                        >
                          {cardStates[index]?.heartClicked ? (
                            <FaHeart style={{ color: "white" }} />
                          ) : (
                            <FaRegHeart style={{ color: "white" }} />
                          )}
                        </span>
                      </div>
                      <div className="user-art">
                        <div className="user-image">
                          <Image
                            src={artwork.avatar}
                            alt={artwork.artist}
                            width={50}
                            height={50}
                            quality={70}
                            loading="lazy"
                          />
                        </div>
                        <span>{artwork.artist}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-info">
                    <h2>{artwork.title}</h2>
                    <p>{artwork.description}</p>
                    <h3>{artwork.price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="fixed-card d-md-block d-sm-none">
              <div className="main-image">
                <Image
                  src="/images/view 3.png"
                  alt="Artwork"
                  width={312}
                  height={390}
                  quality={70}
                  loading="lazy"
                />
                <div className="info-card">
                  <h2>Artwork Name, Sub Category</h2>
                  <span>Acrylic On Paper</span>
                  <p>
                    11.81 x 19.68 x 2 inches 30 x 50 x 5 cm Lorem Ipsom , Lorem
                    Ipsum
                  </p>
                  <p className="price">EGP 2.500</p>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="fees">Fees</h4>
                    </div>
                    <div className="col-md-6">
                      <p className="value-fees">2%</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="total-price">Total Price</h4>
                    </div>
                    <div className="col-md-6">
                      <p className="value-total-price">2.710</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <span className="pars-icon">
                        <HiDotsHorizontal />
                      </span>
                    </div>
                    <div className="col-md-10">
                      <button className="btn-own">Own It</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsAllartworks;
