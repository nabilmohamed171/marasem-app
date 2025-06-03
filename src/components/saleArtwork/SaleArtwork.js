"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import { ImBin } from "react-icons/im";
import FinalTouches from "./FinalTouches";
import Image from "next/image";
import "./share-artwork.css";

const ShareArtwork = () => {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [showOverlayImage, setShowOverlayImage] = useState(false);
  const [artworkName, setArtworkName] = useState("");
  const [artworkType, setArtworkType] = useState("");
  const [artworkStatus, setArtworkStatus] = useState("");
  const [sizes, setSizes] = useState([{ size: "", price: "" }]);
  const [showFinalTouches, setShowFinalTouches] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);
  const [sideImages, setSideImages] = useState(Array(6).fill(null));

  const addSize = () => {
    setSizes([...sizes, { size: "", price: "", showDelete: true }]);
  };

  const removeSize = (index) => {
    const updatedSizes = sizes.filter((_, i) => i !== index);
    setSizes(updatedSizes);
  };

  const handleMainImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const newMainImage = URL.createObjectURL(files[0]);
    setMainImage(newMainImage);
    setShowOverlayImage(true);
    setImageUploaded(true);

    if (files.length > 1) {
      const newSideImages = [...sideImages];
      files.slice(1, 7).forEach((file, index) => {
        if (index < 6) {
          newSideImages[index] = URL.createObjectURL(file);
        }
      });
      setSideImages(newSideImages);
    }
  };

  const handleSideImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newSideImages = [...sideImages];
    newSideImages[index] = URL.createObjectURL(file);
    setSideImages(newSideImages);
  };

  const handleSizeChange = (index, field, value) => {
    const updatedSizes = [...sizes];
    updatedSizes[index][field] = value;
    setSizes(updatedSizes);
  };

  const handleContinueClick = () => {
    setShowFinalTouches((prevState) => !prevState);
  };

  const validateForm = () => {
    const isFormComplete =
      artworkName &&
      artworkType &&
      artworkStatus &&
      sizes.every((size) => size.size && size.price) &&
      mainImage &&
      subCategory;

    setIsFormValid(isFormComplete);
  };

  useEffect(() => {
    validateForm();
  }, [artworkName, artworkType, artworkStatus, sizes, mainImage, subCategory]);

  const subCategories = {
    "Fine Art": ["Painting", "Drawing", "Sculptures", "Mosaic", "Glass Art"],
    "Hand Crafts": ["Pottery", "Weaving", "Woodworking", "Metalwork"],
    "Digital Prints": ["Photography", "Digital Illustration", "3D Art"],
  };

  return (
    <>
      <div className="container">
        <div className="share-artwork">
          <div className="row">
            <div className="col-12">
              <div className="buttons">
                <button className="save-as" type="button">
                  Save as draft
                </button>
                <button
                  className="continue"
                  type="button"
                  onClick={handleContinueClick}
                  style={{
                    opacity: isFormValid ? 1 : 1,
                    pointerEvents: "auto",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  Continue <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFinalTouches && <FinalTouches />}

      <div className="container">
        <div className="share-artwork-upload-images">
          <div className="container-share-artwork">
            <div className="row">
              <div className="col-md-2 col-12 order-2 order-md-1">
                <div className="upload-inputs">
                  {sideImages.map((image, index) => (
                    <div key={index} className="upload-container">
                      <div className="upload">
                        {image ? (
                          <Image
                            src={image}
                            alt={`Side image ${index}`}
                            width={145}
                            height={70}
                            quality={70}
                            className="side-image flex-r-image"
                          />
                        ) : (
                          <span className="FiUpload">
                            <FiUpload />
                          </span>
                        )}
                        <input
                          type="file"
                          className="form-control side-image-input"
                          onChange={(e) => handleSideImageUpload(index, e)}
                          accept="image/*"
                          style={{}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 col-12 order-1 order-md-2">
                <div className="multi-upload">
                  <div className="multi-upload-center">
                    <div className="main-image-container">
                      <Image
                        src="/images/share-artwork.svg"
                        alt="Main Artwork"
                        className="main-image"
                        width={480}
                        height={480}
                        quality={70}
                      />
                    </div>

                    {showOverlayImage && (
                      <div className="overlay-image-container">
                        <Image
                          src={mainImage || "/images/overlay-image.svg"}
                          alt="Overlay Image"
                          className="overlay-image flex-r-image"
                          width={480}
                          height={480}
                          quality={70}
                        />
                      </div>
                    )}

                    <h3>Upload Your Artwork</h3>
                    <p>This is also used as the photo in feeds.</p>
                    <span className="point-icon">
                      <TbPointFilled />
                    </span>

                    <p className={`title ${imageUploaded ? "hidden" : ""}`}>
                      Title Lorem Ipsum, Title Lorem Ipsum
                    </p>

                    <input
                      className="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                      onChange={handleMainImageUpload}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 order-3 order-md-3">
                <div className="form-group">
                  <label htmlFor="artworkName">
                    <span className="main-color">*</span>Artwork Name
                  </label>
                  <input
                    type="text"
                    id="artworkName"
                    value={artworkName}
                    onChange={(e) => setArtworkName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Artwork Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="artworkType">
                    <span className="main-color">*</span>Artwork Type
                  </label>
                  <select
                    id="artworkType"
                    value={artworkType}
                    onChange={(e) => {
                      setArtworkType(e.target.value);
                      setSubCategory("");
                    }}
                    className="form-control"
                    required
                  >
                    <option value="" disabled selected>
                      Select Type
                    </option>
                    <option value="Fine Art">Fine Art</option>
                    <option value="Hand Crafts">Hand Crafts</option>
                    <option value="Digital Prints">Digital Prints</option>
                  </select>
                </div>

                {artworkType && (
                  <div className="form-group">
                    <label htmlFor="subCategory">
                      <span className="main-color">*</span>Sub Category
                    </label>
                    <select
                      id="subCategory"
                      value={subCategory}
                      onChange={(e) => setSubCategory(e.target.value)}
                      className="form-control"
                      required
                    >
                      <option value="" disabled selected>
                        Select Sub Category
                      </option>
                      {subCategories[artworkType]?.map((sub, index) => (
                        <option key={index} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="artworkStatus">
                    <span className="main-color">*</span>Artwork Status
                  </label>
                  <select
                    id="artworkStatus"
                    value={artworkStatus}
                    onChange={(e) => setArtworkStatus(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="" disabled selected>
                      Select Artwork Status
                    </option>
                    <option value="available">Ready to Ship</option>
                    <option value="sold">Customize Only</option>
                    <option value="both">
                      Both (Ready to ship & able to Customize)
                    </option>
                  </select>
                </div>

                {(artworkStatus === "sold" || artworkStatus === "both") && (
                  <div className="form-group">
                    <label htmlFor="customizeTime">
                      <span className="main-color">*</span>Customize Time
                    </label>
                    <select
                      id="customizeTime"
                      className="form-control"
                      required
                    >
                      <option value="" disabled selected>
                        Select Customize Time
                      </option>
                      <option value="5">5 Working Days</option>
                      <option value="15">15 Working Days</option>
                      <option value="20">20 Working Days</option>
                    </select>
                  </div>
                )}

                <div className="form-group">
                  {sizes.map((size, index) => (
                    <div key={index} className="row size-price-grid">
                      <div className="col-6">
                        <label htmlFor="size">
                          <span className="main-color">*</span>Size (cm)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={size.size}
                          onChange={(e) =>
                            handleSizeChange(index, "size", e.target.value)
                          }
                          placeholder="Enter Size"
                          required
                        />
                      </div>

                      <div className="col-6">
                        <label htmlFor="size">
                          <span className="main-color">*</span>Price
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={size.price}
                          onChange={(e) =>
                            handleSizeChange(index, "price", e.target.value)
                          }
                          placeholder="Enter Price"
                          required
                        />
                        <span className="egp">EGP</span>
                      </div>

                      {index > 0 && (
                        <div className="remove-size-price">
                          <span onClick={() => removeSize(index)}>
                            <ImBin />
                          </span>
                        </div>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    className="add-new-size main-color"
                    onClick={addSize}
                  >
                    + Add New Size
                  </button>
                </div>
                <hr />
                <div className="story">
                  <label htmlFor="size">
                    <span className="main-color"></span>The Story
                  </label>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy
                    text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareArtwork;
