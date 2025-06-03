"use client";
import { useState } from "react";
import NavbarBuyer from "@/components/all-navbars/NavbarBuyer";
import Upper from "@/components/all-navbars/NavbarUpper";
import Footer from "@/components/footer/Footer";
import FooterAccordion from "@/components/footer/FooterAccordion";
import CollectionsPage from "@/components/collections/CollectionsPage";
import "./collections.css";

const Collections = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <NavbarBuyer />
      <div className="collections-page">
        <div className="container">
          <div className="collections-header">
            <div className="collections-title">
              <h4>102 Artworks</h4>
              <div className="title-with-button">
                <h2>Special Collection Art</h2>
                <button
                  className={`follow-collection ${
                    isFollowing ? "follow-collection-active" : ""
                  }`}
                  onClick={handleFollowClick}
                >
                  {isFollowing ? "Unfollow Collection" : "Follow Collection"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collections-filter-image">
        <CollectionsPage />
      </div>
      <Footer />
      <FooterAccordion />
    </>
  );
};

export default Collections;
