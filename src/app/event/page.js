"use client";
import { useState, useEffect } from "react";
import Navbar_Home from "@/components/all-navbars/NavbarHome";
import Footer from "@/components/footer/Footer";
import FooterAccordion from "@/components/footer/FooterAccordion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "./event.css";

const EventPage = () => {
  const [showMoreStates, setShowMoreStates] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  useEffect(() => {
    const savedStates = localStorage.getItem("showMoreStates");
    if (savedStates) {
      setShowMoreStates(JSON.parse(savedStates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("showMoreStates", JSON.stringify(showMoreStates));
  }, [showMoreStates]);

  const toggleText = (section) => {
    setShowMoreStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(" ") + "...";
    }
    return text;
  };

  const sectionTexts = {
    section1: {
      short: "First section short text about the exhibition...",
      full: "First section full detailed text about the exhibition. Following his last exhibition, Threshold, which explored the spaces where forest and wetlands meet, Aho’s series of new work emerges out through the woods into the light and air of an open meadow. Aho embraces the meadow as a space of contradictions, both still and humming with life, unruly yet organized by mysterious systems.",
    },
    section2: {
      short: "Second section short description of the event...",
      full: "Second section complete description of the event. The meadow represents a formative landscape for Aho–– in Finnish, 'aho' translates to 'forest glade' or 'wild meadow.' Aho explores the capacity for landscape painting to double as self-portraiture, to trace the narrative of our lives as shaped by the landscape.",
    },
    section3: {
      short: "Third section brief info about the artist...",
      full: "Third section extended info about the artist. This exhibition showcases the artist's unique perspective on nature and how it intertwines with human experience. Each piece tells a story of transformation and connection with the environment.",
    },
    section4: {
      short: "Fourth section preview of the collection...",
      full: "Fourth section detailed view of the collection. The works in this exhibition represent a journey through different seasons and times of day, capturing the ephemeral beauty of natural landscapes and their ever-changing moods.",
    },
  };

  return (
    <>
      <Navbar_Home />

      <div className="event-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="one-event d-flex-event">
                <h4>NEW</h4>
                <h3>Oct 4-Nov 9, 2024 | 6 p.m. – 8 p.m.</h3>
                <h2>EUPHORIA</h2>
                <span className="icon-map">
                  <FaMapMarkerAlt />
                </span>
                <p>F313-1 The Courtyard Mall, District 12, Sheikh Zayed</p>
                <div className="event-info">
                  <p>{truncateText(sectionTexts.section1.short, 40)}</p>
                  {showMoreStates.section1 && (
                    <p className="more-text">{sectionTexts.section1.full}</p>
                  )}
                  <Link
                    href="#section1"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleText("section1");
                    }}
                    className="show-more-btn"
                  >
                    {showMoreStates.section1 ? "HIDE" : "SHOW MORE"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-image">
                <Image
                  src="/images/1.png"
                  alt="Image 1"
                  width={640}
                  height={845}
                  quality={60}
                  loading="lazy"
                  className="responsive-image"
                />
              </div>
            </div>
          </div>
          <hr className="event-hr" />

          <div className="row" id="section2">
            <div className="col-md-6">
              <div className="two-event d-flex-event">
                <h3>December 27 - January 10</h3>
                <h2>EUPHORIA</h2>
                <span className="icon-map">
                  <FaMapMarkerAlt />
                </span>
                <p>F313-1 The Courtyard Mall, District 12, Sheikh Zayed</p>
                <div className="event-info">
                  <p>{truncateText(sectionTexts.section2.short, 30)}</p>
                  {showMoreStates.section2 && (
                    <p className="more-text">{sectionTexts.section2.full}</p>
                  )}
                  <Link
                    href="#section2"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleText("section2");
                    }}
                    className="show-more-btn"
                  >
                    {showMoreStates.section2 ? "HIDE" : "SHOW MORE"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-image">
                <Image
                  src="/images/2.png"
                  alt="Image 2"
                  width={642}
                  height={642}
                  quality={60}
                  loading="lazy"
                  className="responsive-image"
                />
              </div>
            </div>
          </div>
          <hr className="event-hr" />

          <div className="row" id="section3">
            <div className="col-md-6">
              <div className="thr-event d-flex-event">
                <h3>December 27 - January 10</h3>
                <h2>EUPHORIA</h2>
                <span className="icon-map">
                  <FaMapMarkerAlt />
                </span>
                <p>F313-1 The Courtyard Mall, District 12, Sheikh Zayed</p>
                <div className="event-info">
                  <p>{truncateText(sectionTexts.section3.short, 30)}</p>
                  {showMoreStates.section3 && (
                    <p className="more-text">{sectionTexts.section3.full}</p>
                  )}
                  <Link
                    href="#section3"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleText("section3");
                    }}
                    className="show-more-btn"
                  >
                    {showMoreStates.section3 ? "HIDE" : "SHOW MORE"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-image">
                <Image
                  src="/images/3.png"
                  alt="Image 3"
                  width={642}
                  height={642}
                  quality={60}
                  loading="lazy"
                  className="responsive-image"
                />
              </div>
            </div>
          </div>
          <hr className="event-hr" />

          <div className="row" id="section4">
            <div className="col-md-6">
              <div className="four-event d-flex-event">
                <h3>December 27 - January 10</h3>
                <h2>EUPHORIA</h2>
                <span className="icon-map">
                  <FaMapMarkerAlt />
                </span>
                <p>F313-1 The Courtyard Mall, District 12, Sheikh Zayed</p>
                <div className="event-info">
                  <p>{truncateText(sectionTexts.section4.short, 30)}</p>
                  {showMoreStates.section4 && (
                    <p className="more-text">{sectionTexts.section4.full}</p>
                  )}
                  <Link
                    href="#section4"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleText("section4");
                    }}
                    className="show-more-btn"
                  >
                    {showMoreStates.section4 ? "HIDE" : "SHOW MORE"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="event-image">
                <Image
                  src="/images/4.png"
                  alt="Image 4"
                  width={642}
                  height={642}
                  quality={60}
                  loading="lazy"
                  className="responsive-image"
                />
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

export default EventPage;
