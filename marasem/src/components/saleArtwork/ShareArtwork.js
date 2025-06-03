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

  const addSize = () => {
    setSizes([...sizes, { size: "", price: "", showDelete: true }]);
  };

  const removeSize = (index) => {
    const updatedSizes = sizes.filter((_, i) => i !== index);
    setSizes(updatedSizes);
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    if (imagesArray.length > 7) {
      setImages(imagesArray.slice(0, 7));
    } else {
      setImages(imagesArray);
    }

    setMainImage(imagesArray[0]);
    setShowOverlayImage(true);
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
      mainImage;
    setIsFormValid(isFormComplete);
  };

  useEffect(() => {
    validateForm();
  }, [artworkName, artworkType, artworkStatus, sizes, mainImage]);

  const handleNumberInput = (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
  };

  return (
    <>
      <div className="container">
        <div className="share-artwork">
          <div className="row">
            <div className="col">
              <div className="buttons">
                <button className="save-as" type="button">
                  Save as draft
                </button>
                <button
                  className="continue"
                  type="button"
                  onClick={handleContinueClick}
                  disabled={!isFormValid}
                  style={{
                    opacity: isFormValid ? 1 : 0.5,
                    pointerEvents: isFormValid ? "auto" : "none",
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
              <div className="col-12 col-md-2 order-2 order-md-1">
                <div className="upload-inputs">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="upload-container">
                      <div className="upload">
                        {images[index + 1] ? (
                          <Image
                            src={images[index + 1]}
                            alt={`Uploaded preview ${index}`}
                            quality={100}
                            width={500}
                            height={500}
                            className="side-image flex-r-image"
                          />
                        ) : (
                          <span className="FiUpload">
                            <FiUpload />
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="multi-upload">
                  <div className="multi-upload-center">
                    <div className="main-image-container">
                      <Image
                        src="/images/share-artwork.svg"
                        alt="Main Artwork"
                        className="main-image"
                        width={500}
                        height={500}
                      />
                    </div>

                    {showOverlayImage && (
                      <div className="overlay-image-container">
                        <Image
                          src={mainImage || "/images/overlay-image.svg"}
                          alt="Overlay Image"
                          className="overlay-image flex-r-image"
                          quality={100}
                          width={500}
                          height={500}
                        />
                      </div>
                    )}

                    <input
                      className="form-control"
                      type="file"
                      id="formFileMultiple"
                      multiple
                      onChange={handleImageUpload}
                      required
                    />
                    <h3>Upload Your Artwork</h3>
                    <p>This is also used as the photo in feeds.</p>
                    <span className="TbPointFilled">
                      <TbPointFilled />
                    </span>
                    <p>Title Lorem Ipsum, Title Lorem Ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 order-3 order-md-3">
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
                    onChange={(e) => setArtworkType(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="painting">Painting</option>
                    <option value="sculpture">Sculpture</option>
                    <option value="digital">Digital</option>
                  </select>
                </div>

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
                    <option value="">Select Artwork Status</option>
                    <option value="available">Ready to Ship</option>
                    <option value="sold">Customize Only</option>
                  </select>
                </div>

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
                          onInput={handleNumberInput}
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
                          onInput={handleNumberInput}
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

      {showFinalTouches && <FinalTouches />}
    </>
  );
};

export default ShareArtwork;
