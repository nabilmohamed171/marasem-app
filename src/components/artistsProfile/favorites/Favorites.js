import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Favorites = ({ items }) => {
  const [cardStates, setCardStates] = useState([]);

  useEffect(() => {
    const initialStates = items.map(() => ({
      heartClicked: true, // افتراضياً المفضلة تكون محبوكة
      plusClicked: false,
    }));
    setCardStates(initialStates);
  }, [items]);

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
    <div className="collections-artist">
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 col-6">
            <div className="item-image">
              <div className="overley"></div>
              <div className="photo">
                <Image
                  src={item.imageSrc}
                  alt={`Artwork ${index + 1}`}
                  width={312}
                  height={390}
                  quality={70}
                  loading="lazy"
                />
              </div>
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
                </div>
                <span
                  className="heart"
                  onClick={() => handleHeartClick(index)}
                  style={{
                    color: cardStates[index]?.heartClicked
                      ? "white"
                      : "inherit",
                  }}
                >
                  {cardStates[index]?.heartClicked ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
                <div className="user-art">
                  <div className="user-image">
                    <Image
                      src={item.artistImage}
                      alt="avatar"
                      width={50}
                      height={50}
                      quality={70}
                      loading="lazy"
                    />
                  </div>
                  <Link href="#" className="reser-link">
                    <span>{item.artist}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="photo-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
    price: "EGP 2,500",
    imageSrc: "/images/22.jpeg",
    artist: "Omar Mohsen",
    artistImage: "/images/avatar2.png",
  },
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
    price: "EGP 3,000",
    imageSrc: "/images/33.jpeg",
    artist: "Ahmed Ali",
    artistImage: "/images/avatar2.png",
  },
  {
    name: "Lorem Ipsum",
    description: "Lorem Ipsum, Lorem Ipsum, Lorem Ipsum",
    price: "EGP 4,500",
    imageSrc: "/images/7.png",
    artist: "Fatma Nabil",
    artistImage: "/images/avatar2.png",
  },
];

export default function App() {
  return <Favorites items={items} />;
}
