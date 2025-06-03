"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import "./shop-artist.css";

const Artists = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "Omar Mohsen",
      location: "Cairo, Egypt",
      tags: ["Portrait", "Urban"],
      userImage: "/images/avatar2.png",
      projectImages: [
        "/images/view 1.png",
        "/images/view 2.png",
        "/images/view 3.png",
      ],
      projectViews: 5900,
      appreciations: 20300,
    },
    {
      id: 2,
      name: "Ahmed Ali",
      location: "Alexandria, Egypt",
      tags: ["Nature", "Landscape"],
      userImage: "/images/avatar.png",
      projectImages: ["/images/view 5.png", null, "/images/1.png"],
      projectViews: 8000,
      appreciations: 15400,
    },
    {
      id: 3,
      name: "Sara Hassan",
      location: "Dubai, UAE",
      tags: ["Fashion", "Street"],
      userImage: null, // صورة شخصية غير موجودة
      projectImages: [null, "/images/3.png", null], // صور غير موجودة
      projectViews: 15000,
      appreciations: 25000,
    },
    {
      id: 4,
      name: "Mona Samir",
      location: "London, UK",
      tags: ["Architectural", "Product"],
      userImage: "/images/avatar.png",
      projectImages: ["/images/2.png", null, "/images/4.png"],
      projectViews: 10000,
      appreciations: 18000,
    },
  ]);

  const [artistTags, setArtistTags] = useState([]);
  const [followedArtists, setFollowedArtists] = useState(new Set());
  const sliderContentRef = useRef(null);
  const nextButtonRef = useRef(null);
  const scrollStep = 150;
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRandomArtists = useCallback(
    (num) => {
      const shuffledArtists = [...artists].sort(() => 0.5 - Math.random());
      return shuffledArtists.slice(0, num);
    },
    [artists]
  );

  useEffect(() => {
    const randomArtists = getRandomArtists(20);
    setArtistTags(randomArtists);
  }, [artists, getRandomArtists]);

  const handleTagSelection = useCallback(
    (tag) => {
      setSelectedTags((prevSelectedTags) => {
        const isTagSelected = prevSelectedTags.includes(tag);
        const newSelectedTags = isTagSelected
          ? prevSelectedTags.filter((t) => t !== tag)
          : [...prevSelectedTags, tag];

        if (newSelectedTags.length === 0) {
          setArtistTags(getRandomArtists(20));
        } else {
          const filteredArtists = artists.filter((artist) =>
            artist.tags.some((artistTag) => newSelectedTags.includes(artistTag))
          );
          setArtistTags(filteredArtists);
        }

        return newSelectedTags;
      });
    },
    [artists, getRandomArtists]
  );

  const handleRemoveTag = useCallback(
    (tag) => {
      setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((t) => t !== tag)
      );

      if (selectedTags.length === 1) {
        setArtistTags(getRandomArtists(20));
      } else {
        const filteredArtists = artists.filter((artist) =>
          artist.tags.some((t) => selectedTags.includes(t) && t !== tag)
        );
        setArtistTags(filteredArtists);
      }
    },
    [artists, selectedTags, getRandomArtists]
  );

  const toggleFollow = useCallback((artistId) => {
    setFollowedArtists((prevFollowedArtists) => {
      const newFollowedArtists = new Set(prevFollowedArtists);
      if (newFollowedArtists.has(artistId)) {
        newFollowedArtists.delete(artistId);
      } else {
        newFollowedArtists.add(artistId);
      }
      return newFollowedArtists;
    });
  }, []);

  const handleWheel = useCallback(
    (e) => {
      if (sliderContentRef.current) {
        const maxScroll =
          sliderContentRef.current.scrollWidth -
          sliderContentRef.current.clientWidth;
        if (e.deltaY > 0) {
          setScrollAmount((prev) => Math.min(prev + scrollStep, maxScroll));
        } else if (e.deltaY < 0) {
          setScrollAmount((prev) => Math.max(prev - scrollStep, 0));
        }
      }
    },
    [scrollStep]
  );

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  }, []);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const moveX = e.clientX - startX;
      const newScrollAmount = Math.max(
        0,
        Math.min(
          scrollAmount - moveX,
          sliderContentRef.current.scrollWidth -
            sliderContentRef.current.clientWidth
        )
      );
      setScrollAmount(newScrollAmount);
      setStartX(e.clientX);
    },
    [isDragging, scrollAmount, startX]
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const moveX = e.touches[0].clientX - startX;
      const newScrollAmount = Math.max(
        0,
        Math.min(
          scrollAmount - moveX,
          sliderContentRef.current.scrollWidth -
            sliderContentRef.current.clientWidth
        )
      );
      setScrollAmount(newScrollAmount);
      setStartX(e.touches[0].clientX);
    },
    [isDragging, scrollAmount, startX]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const nextButton = nextButtonRef.current;
    const sliderContent = sliderContentRef.current;

    if (!nextButton || !sliderContent) return;

    const handleNextClick = () => {
      const maxScroll = sliderContent.scrollWidth - sliderContent.clientWidth;
      if (scrollAmount + scrollStep > maxScroll) {
        setScrollAmount(0);
      } else {
        setScrollAmount((prev) => prev + scrollStep);
      }
    };

    nextButton.addEventListener("click", handleNextClick);

    return () => {
      nextButton.removeEventListener("click", handleNextClick);
    };
  }, [scrollAmount, scrollStep]);

  useEffect(() => {
    if (sliderContentRef.current) {
      sliderContentRef.current.style.transform = `translateX(-${scrollAmount}px)`;
    }
  }, [scrollAmount]);

  return (
    <>
      <div className="slider-tags">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-1 d-none d-md-block count-number-items">
              <span>{artistTags.length} Items</span>
            </div>
            <div className="col-1 d-none d-md-block">
              <div className="dropdown dropdown-sort-by-artist">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Most Popular
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Newest
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Most Appreciations
                    </Link>
                  </li>
                </ul>
                <span className="arrow-down-icon">
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            <div className="col-10 position-relative">
              <div className="container">
                <div className="slider-wrapper artists-filter">
                  <ul
                    ref={sliderContentRef}
                    className="list-unstyled slider-content"
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    {[
                      "Portrait",
                      "Landscape",
                      "Urban",
                      "Minimalist",
                      "Fashion",
                      "Street",
                      "Product",
                      "Food",
                      "Nature",
                      "Black and White",
                      "Aerial",
                      "Macro",
                      "Event",
                      "Architectural",
                      "Abstract",
                    ].map((tag, index) => (
                      <div
                        className={`tags ${
                          selectedTags.includes(tag) ? "active" : ""
                        }`}
                        key={index}
                      >
                        <li onClick={() => handleTagSelection(tag)}>{tag}</li>
                        {selectedTags.includes(tag) && (
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveTag(tag);
                            }}
                            className="icon-x-tags"
                          >
                            <IoMdClose />
                          </span>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
                {!isMobile && (
                  <div className="col-md-1">
                    <div
                      ref={nextButtonRef}
                      className="slider-scroll slider-next"
                    >
                      <IoIosArrowForward />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="artists">
          <div className="row">
            {artistTags.map((artist) => (
              <div className="col-lg-3 col-md-6 col-12" key={artist.id}>
                <div className="artist">
                  <div className="row artist-images-row g-0">
                    <div className="col-4">
                      <div className="item-image">
                        {artist.projectImages[0] ? (
                          <Image
                            className="image-left"
                            src={artist.projectImages[0]}
                            alt={`${artist.name} Project 1`}
                            width={130}
                            height={105}
                            quality={70}
                            loading="lazy"
                          />
                        ) : (
                          <div className="empty-image-placeholder" />
                        )}
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="item-image">
                        {artist.projectImages[1] ? (
                          <Image
                            src={artist.projectImages[1]}
                            alt={`${artist.name} Project 2`}
                            width={130}
                            height={105}
                            quality={70}
                            loading="lazy"
                          />
                        ) : (
                          <div className="empty-image-placeholder" />
                        )}
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="item-image">
                        {artist.projectImages[2] ? (
                          <Image
                            className="image-right"
                            src={artist.projectImages[2]}
                            alt={`${artist.name} Project 3`}
                            width={130}
                            height={105}
                            quality={70}
                            loading="lazy"
                          />
                        ) : (
                          <div className="empty-image-placeholder" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="artist-info text-center">
                    <div className="user-image-container">
                      <Link className="reser-link" href="/artist-profile">
                        <div className="user-image-wrapper">
                          {artist.userImage ? (
                            <Image
                              src={artist.userImage}
                              alt={`${artist.name} Avatar`}
                              width={80}
                              height={80}
                              quality={70}
                              loading="lazy"
                              className="artist-avatar"
                            />
                          ) : (
                            <div className="empty-avatar-placeholder" />
                          )}
                        </div>
                      </Link>
                    </div>
                    <h2 className="artist-name">
                      <Link className="reser-link" href="/artist-profile">
                        {artist.name}
                      </Link>
                    </h2>
                    <span className="address">
                      <FaMapMarkerAlt /> {artist.location}
                    </span>
                  </div>
                  <div className="extra-artist-info text-center">
                    <div className="row">
                      <div className="col-4">
                        <h4>{artist.projectViews.toLocaleString()}</h4>
                        <span>Project Views</span>
                      </div>
                      <div className="col-4">
                        <button
                          onClick={() => toggleFollow(artist.id)}
                          className={
                            followedArtists.has(artist.id)
                              ? "follow-unfollow-active"
                              : ""
                          }
                        >
                          {followedArtists.has(artist.id)
                            ? "Unfollow"
                            : "Follow"}
                        </button>
                      </div>
                      <div className="col-4">
                        <h4>{artist.appreciations.toLocaleString()}</h4>
                        <span>Appreciations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
