"use client";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import AddAddress from "@/components/addressCart/addAddress/AddAddress";
import Link from "next/link";
import "./customize-artwork.css";

const CustomizeArtwork = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [images, setImages] = useState({ main: null, secondary: [] });
  const [formData, setFormData] = useState({
    size: "",
    price: "",
    description: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMainImageChange = (e) => {
    if (e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const mainImage = URL.createObjectURL(files[0]);

      // توزيع الصور المتبقية على الصناديق الفرعية
      const newSecondary = [...images.secondary];
      for (let i = 0; i < Math.min(files.length - 1, 3); i++) {
        newSecondary[i] = URL.createObjectURL(files[i + 1]);
      }

      setImages({
        main: mainImage,
        secondary: newSecondary,
      });
    }
  };

  const handleSecondaryImageChange = (index, e) => {
    if (e.target.files.length > 0) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImages((prev) => {
        const newSecondary = [...prev.secondary];
        newSecondary[index] = newImage;
        return { ...prev, secondary: newSecondary };
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const newFormData = { ...prevState, [name]: value };
      setIsFormValid(
        newFormData.size &&
          newFormData.price &&
          newFormData.description &&
          images.main
      );
      return newFormData;
    });
  };

  const handleSendRequestClick = () => {
    setShowAddAddress(true);
  };

  if (!isVisible) return null;

  return (
    <div className="customize-artwork">
      <div className="customize-art">
        <div className="artwork">
          <span className="close" onClick={handleClose}>
            <IoClose />
          </span>
          <div className="row">
            <div className="col-md-5">
              <div className="customize-image">
                <div className="main-image-container">
                  {images.main ? (
                    <div className="main-image-wrapper">
                      <Image
                        src={images.main}
                        alt="Main Artwork"
                        fill
                        quality={70}
                        className="main-image-uploaded"
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <div className="main-image-placeholder-wrapper">
                      <Image
                        src="/images/share-artwork.svg"
                        alt="Main Artwork"
                        className="main-image-placeholder"
                        width={118}
                        height={110}
                        quality={70}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    className="main-image-upload-input"
                    onChange={handleMainImageChange}
                    accept="image/*"
                    multiple
                  />
                </div>
                {!images.main && (
                  <div className="upload-text">
                    <p className="first">
                      Upload Your artwork, this will also be used
                    </p>
                    <p className="sec">as the thumbnail in feeds</p>
                  </div>
                )}
              </div>
              <div className="row secondary-images">
                {[...Array(3)].map((_, index) => (
                  <div className="col-md-4 col-4" key={index}>
                    <div
                      className={`secondary-image-container iamge-${index + 1}`}
                    >
                      {images.secondary[index] ? (
                        <Image
                          src={images.secondary[index]}
                          alt={`Secondary ${index + 1}`}
                          fill
                          quality={70}
                          className="secondary-image-uploaded"
                          loading="lazy"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <span className="FiUpload">
                          <FiUpload />
                        </span>
                      )}
                      <input
                        type="file"
                        className="secondary-image-upload-input"
                        onChange={(e) => handleSecondaryImageChange(index, e)}
                        accept="image/*"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-7 user-info">
              <h2>Customize Artwork</h2>
              <div className="user">
                <div className="user-name">
                  <Image
                    src="/images/avatar2.png"
                    alt="User Avatar"
                    className="img-fluid flex-r-image"
                    width={50}
                    height={50}
                    quality={70}
                    loading="lazy"
                  />
                </div>
                <span className="name">Omer Mohsen</span>
                <span className="address">
                  <FaMapMarkerAlt /> Cairo, Egypt
                </span>
              </div>
              <div className="row g-3">
                <div className="col-md-6 col-6">
                  <label>
                    <span className="main-color">*</span> Size
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="40 x 30 cm"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6 col-6">
                  <label>
                    <span className="main-color">*</span> Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Minimum Price EGP"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12">
                  <label>Description</label>
                  <textarea
                    className="form-control desc"
                    placeholder="Description here..."
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12">
                  <div className="button-send-request">
                    <Link href="">
                      <button
                        type="button"
                        className="btn"
                        disabled={!isFormValid}
                        onClick={handleSendRequestClick}
                      >
                        Send Request
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddAddress && <AddAddress />}
    </div>
  );
};

export default CustomizeArtwork;
