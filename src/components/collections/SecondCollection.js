import Link from "next/link";
import Image from "next/image";
import "./collections.css";

const SecCollections = () => {
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
    <div className="sec-collections">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-6 first">
            <div className="row">
              <div className="col-md-6 col-5">
                <div className="info">
                  <h2>VINTAGE</h2>
                  <p>{limitWords(text1, 8)}</p>
                  <Link href="/collections">Find</Link>
                </div>
              </div>
              <div className="col-md-6 col-7">
                <div className="images-grid">
                  <div className="main-image">
                    <Link href="/collections">
                      <Image
                        src="/images/7.png"
                        alt="image"
                        width={177}
                        height={177}
                        quality={70}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="top-right-image">
                    <Image
                      src="/images/6.png"
                      alt="image"
                      width={85}
                      height={85}
                      quality={70}
                      loading="lazy"
                    />
                  </div>
                  <div className="bottom-right-image">
                    <div className="dark-theme">
                      <div className="image-number-count">
                        <div className="overley-r-r-b"></div>
                        <Image
                          src="/images/5.png"
                          alt="image"
                          width={85}
                          height={85}
                          quality={70}
                          loading="lazy"
                        />
                      </div>
                      <span>5+</span>
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
                  <h2>GIFTS</h2>
                  <p>{limitWords(text2, 8)}</p>
                  <Link href="/collections">Find</Link>
                </div>
              </div>
              <div className="col-md-6 col-7">
                <div className="images-grid">
                  <div className="main-image">
                    <Link href="/collections">
                      <Image
                        src="/images/3.png"
                        alt="image"
                        width={177}
                        height={177}
                        quality={70}
                        loading="lazy"
                      />
                    </Link>
                  </div>
                  <div className="top-right-image">
                    <Image
                      src="/images/4.png"
                      alt="image"
                      width={85}
                      height={85}
                      quality={70}
                      loading="lazy"
                    />
                  </div>
                  <div className="bottom-right-image">
                    <div className="dark-theme">
                      <div className="image-number-count">
                        <div className="overley-r-r-b"></div>
                        <Image
                          src="/images/5.png"
                          alt="image"
                          width={85}
                          height={85}
                          quality={70}
                          loading="lazy"
                        />
                      </div>
                      <span>3+</span>
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

export default SecCollections;
