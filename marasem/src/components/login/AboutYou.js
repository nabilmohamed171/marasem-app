"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/_css/login.css";

const AboutYou = () => {
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [otherSocialMediaLink, setOtherSocialMediaLink] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      socialMediaLink,
      portfolioLink,
      websiteLink,
      otherSocialMediaLink,
      summary,
    });
  };

  return (
    <div className="about-you-page">
      <div className="row">
        <div className="col-md-7">
          <div className="about-you-image">
            <Image
              src="/images/Registration.jpg"
              alt="marasem"
              width={2000}
              height={2000}
              objectFit="cover"
              loading="lazy"
              quality={100}
            />
          </div>
        </div>
        <div className="col">
          <div className="about-you-form">
            <div className="website-logo scale-hover">
              <Image
                src="/images/main-logo.png"
                alt="marasem"
                width={130}
                height={39}
              />
              <span></span>
            </div>
            <div className="about-you-info">
              <h2>About You</h2>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus minima, explicabo voluptatem ratione dolor
              </h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="enter-media-link">
                <div className="row">
                  <div className="col entry-socail-media">
                    <label htmlFor="socialMediaLink" className="form-label">
                      <span className="req">*</span>Social Media Link
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      id="socialMediaLink"
                      value={socialMediaLink}
                      onChange={(e) => setSocialMediaLink(e.target.value)}
                      placeholder="Enter your social media link"
                      required
                    />
                  </div>
                  <div className="col entry-portfolio">
                    <label htmlFor="portfolio" className="form-label">
                      Portfolio
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      id="portfolio"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="Enter your portfolio link"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col entry-website-url">
                    <label htmlFor="websiteLink" className="form-label">
                      Website Link
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      id="websiteLink"
                      value={websiteLink}
                      onChange={(e) => setWebsiteLink(e.target.value)}
                      placeholder="Enter your website link"
                    />
                  </div>
                  <div className="col entry-meida">
                    <label
                      htmlFor="otherSocialMediaLink"
                      className="form-label"
                    >
                      Other Social Media Link
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      id="otherSocialMediaLink"
                      value={otherSocialMediaLink}
                      onChange={(e) => setOtherSocialMediaLink(e.target.value)}
                      placeholder="Enter another social media link"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label htmlFor="summary" className="form-label">
                      Summary
                    </label>
                    <textarea
                      className="form-control"
                      id="summary"
                      rows="4"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      placeholder="Write a brief summary about yourself"
                    />
                  </div>
                </div>
              </div>
              <Link href="my-wishes">
                <button type="submit" className="about-you-btn">
                  Next
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutYou;
