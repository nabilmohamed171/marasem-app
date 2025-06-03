import React from "react";
import Image from "next/image";
import Link from "next/link";

const ThreeCollections = () => {
  const limitWords = (text, wordLimit) => {
    const words = text.trim().split(/\s+/);
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const text1 =
    "is simply dummy text of the printing and typesetting industry.";
  const text2 =
    "is simply dummy text of the printing and typesetting industry.";

  return (
    <div className="three-collections">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-6 first">
            <div className="row">
              <div className="col-md-6 col-5">
                <div className="info">
                  <h2>MODERN ART</h2>
                  <p>{limitWords(text1, 8)}</p>
                  <Link href="/collections">Find</Link>
                </div>
              </div>
              <div className="col-md-6 col-7">
                <div className="row">
                  <div className="col-md-8 col-7">
                    <div className="first-image">
                      <Link href="/collections">
                        <Image
                          src="/images/6.png"
                          alt="Modern Art"
                          width={177}
                          height={177}
                          quality={70}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-5">
                    <div className="sec-image">
                      <Image
                        src="/images/2.png"
                        alt="Second Image of Modern Art"
                        width={85}
                        height={85}
                        quality={70}
                        loading="lazy"
                      />
                      <div className="dark-theme">
                        <div className="image-number-count">
                          <div className="overley-r-r-b"></div>
                          <Image
                            src="/images/6.png"
                            alt="Overlay Image for Modern Art"
                            width={85}
                            height={85}
                            quality={70}
                            loading="lazy"
                          />
                        </div>
                        <span>2+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-6 sec">
            <div className="row">
              <div className="col-md-6 col-5">
                <div className="info">
                  <h2>POP ART</h2>
                  <p>{limitWords(text2, 8)}</p>
                  <Link href="/collections">Find</Link>
                </div>
              </div>
              <div className="col-md-6 col-7">
                <div className="row">
                  <div className="col-md-8 col-7">
                    <div className="first-image">
                      <Link href="/collections">
                        <Image
                          src="/images/4.png"
                          alt="Pop Art"
                          width={177}
                          height={177}
                          quality={70}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 col-5">
                    <div className="sec-image">
                      <Image
                        src="/images/5.png"
                        alt="Second Image of Pop Art"
                        width={85}
                        height={85}
                        quality={70}
                        loading="lazy"
                      />
                      <div className="dark-theme">
                        <div className="image-number-count">
                          <div className="overley-r-r-b"></div>
                          <Image
                            src="/images/6.png"
                            alt="Overlay Image for Pop Art"
                            width={85}
                            height={85}
                            quality={70}
                            loading="lazy"
                          />
                        </div>
                        <span>7+</span>
                      </div>
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

export default ThreeCollections;
