"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import NavbarArtists from "@/components/all-navbars/NavbarArtists";
import Footer from "@/components/footer/Footer";
import FooterAccordion from "@/components/footer/FooterAccordion";
import Image from "next/image";
import Link from "next/link";
import "./artist-edit-product.css";

const ArtistEditProduct = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [mainImage, setMainImage] = useState("/images/88.jpeg");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const handleImageClick = useCallback((imageSrc, index) => {
    setMainImage(imageSrc);
    setCurrentIndex(index);
  }, []);

  const thumbnails = [
    "/images/88.jpeg",
    "/images/view 1.png",
    "/images/view 2.png",
    "/images/view 3.png",
  ];

  const handleNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % thumbnails.length;
    setCurrentIndex(newIndex);
    setMainImage(thumbnails[newIndex]);
  }, [currentIndex, thumbnails]);

  const handlePrevious = useCallback(() => {
    const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    setCurrentIndex(newIndex);
    setMainImage(thumbnails[newIndex]);
  }, [currentIndex, thumbnails]);

  const handleHeartClick = useCallback(() => {
    setIsHeartFilled((prev) => !prev);
  }, []);

  // Swipe functionality for touch devices
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2; // Adjust sensitivity

    if (walk > 50) {
      handlePrevious();
      setIsDragging(false);
    } else if (walk < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse drag functionality for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2;

    if (walk > 50) {
      handlePrevious();
      setIsDragging(false);
    } else if (walk < -50) {
      handleNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Auto-scroll thumbnails to show the active one
  useEffect(() => {
    if (sliderRef.current) {
      const thumbnailElements = sliderRef.current.querySelectorAll(".images");
      if (thumbnailElements[currentIndex]) {
        thumbnailElements[currentIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  return (
    <>
      <NavbarArtists />

      <div className="container">
        <div className="all-artworks-user">
          <span className="prev">
            <Link className="reser-link" href="/collections">
              <IoIosArrowBack />
            </Link>
          </span>
          <div className="container-all-artworks-user">
            <div className="path">
              <p>
                <Link className="reser-link" href="/collections">
                  All Artworks
                </Link>
                <IoIosArrowForward />
                <Link className="reser-link" href="/artist-profile">
                  Omer Mohsen
                </Link>
                <IoIosArrowForward />
                <span className="main-color">Balzi Rossi</span>
              </p>
            </div>
            <div className="all-artworks">
              <div className="row">
                <div className="col-md-2 col-12 d-none d-md-block">
                  <div className="left-images" ref={sliderRef}>
                    {thumbnails.map((src, index) => (
                      <div
                        key={index}
                        className={`images ${
                          currentIndex === index ? "active-thumbnail" : ""
                        }`}
                        onClick={() => handleImageClick(src, index)}
                      >
                        <Image
                          src={src}
                          alt={`Artwork view ${index + 1}`}
                          width={150}
                          height={108}
                          quality={70}
                          className="flex-r-image"
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-5 col-12">
                  <div
                    className="main-image"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="slider-buttons">
                      <button onClick={handlePrevious} className="prev-button">
                        <IoIosArrowBack />
                      </button>
                      <button onClick={handleNext} className="next-button">
                        <IoIosArrowForward />
                      </button>
                    </div>
                    <div className="image">
                      <Image
                        src={mainImage}
                        alt="Main artwork"
                        width={475}
                        height={475}
                        quality={70}
                        className="flex-r-image"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-5 col-12">
                  <div className="art-user">
                    <div className="row">
                      <div className="col-md-6 col-6">
                        <div className="user-name">
                          <Image
                            src="/images/avatar2.png"
                            alt="Avatar"
                            width={50}
                            height={50}
                            quality={70}
                            className="flex-r-image"
                            loading="lazy"
                          />
                        </div>
                        <span>
                          <Link className="reser-link" href="/artist-profile">
                            Omer Mohsen
                          </Link>
                        </span>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="buttons-follow">
                          <span
                            className={`icon-heart ${
                              isHeartFilled ? "filled" : ""
                            }`}
                            onClick={handleHeartClick}
                          >
                            {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
                          </span>
                          <button className="edit-artwork">Edit Artwork</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="image-heading">
                    <h2>Balzi Rossi Oil Painting</h2>
                    <p>20 x 29 x 3.5 cm , 2024 , 48/58 Lnk On Paper</p>
                    <p className="custom">This artwork Customizable</p>
                  </div>
                  <div className="price-custom">
                    <div className="row">
                      <div className="col-12">
                        <p>Price</p>
                        <h3>EGP 2.500</h3>
                      </div>
                    </div>
                  </div>
                  <div className="image-story-tap">
                    <div className="tabs">
                      <button
                        className={`tab-link ${
                          activeTab === "story" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("story")}
                      >
                        Story
                      </button>
                      <button
                        className={`tab-link ${
                          activeTab === "specifications" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("specifications")}
                      >
                        Specifications
                      </button>
                    </div>
                    <div
                      className={`tab-content ${
                        activeTab === "story" ? "active" : ""
                      }`}
                      id="story-content"
                      style={{
                        display: activeTab === "story" ? "block" : "none",
                      }}
                    >
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                      </p>
                      <p>
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>

                    <div
                      className={`tab-content ${
                        activeTab === "specifications" ? "active" : ""
                      }`}
                      id="specifications-content"
                      style={{
                        display:
                          activeTab === "specifications" ? "block" : "none",
                      }}
                    >
                      <table className="table table-striped table-dark">
                        <tbody>
                          <tr>
                            <td>Variant</td>
                            <td>Oil Painting</td>
                          </tr>
                          <tr>
                            <td>Type</td>
                            <td>Lace, Leather</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FooterAccordion />
    </>
  );
};

export default ArtistEditProduct;
