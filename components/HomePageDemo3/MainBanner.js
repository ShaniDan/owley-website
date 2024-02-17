import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div id="header" className="main-banner-area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="main-banner-content text-center ">
                <span
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  LEARNING MEETS INNOVATION: SIMPLIFIED, PERSONALIZED, AND POWERED BY AI
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Revolutionize Your Study Habits with Owley
                </h1>


                <div style={{ display:"flex", justifyContent: "center", marginTop: 10}}>
                  <div
                    className="single-footer-widget"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >

                    <form className="newsletter-form">
                      <input
                        type="email"
                        className="input-newsletter"
                        placeholder="Enter your email"
                        name="EMAIL"
                        required
                      />

                      <button type="submit" className="default-btn">
                        Join The Waitlist
                      </button>
                    </form>
                  </div>
                </div>
                <p
                  className="text-center"
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Powered by AI, our app instantly crafts flashcards from your questions, making learning personalized and efficient. Dive into smarter studying with Owley, where every question is a step towards mastering new concepts effortlessly.
                </p>
                



              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className="banner-shape-1">
          <img src="/images/main-banner/banner-shape-1.png" alt="image" />
        </div>
        <div className="banner-shape-2">
          <img src="/images/main-banner/banner-shape-2.png" alt="image" />
        </div>
        <div className="banner-dot-shape-1">
          <img src="/images/main-banner/dot-1.png" alt="image" />
        </div>
        <div className="banner-dot-shape-2">
          <img src="/images/main-banner/dot-2.png" alt="image" />
        </div>
        <div className="banner-dot-shape-3">
          <img src="/images/main-banner/dot-3.png" alt="image" />
        </div>
        <div className="banner-dot-shape-4">
          <img src="/images/main-banner/dot-4.png" alt="image" />
        </div>
        <div className="banner-dot-shape-5">
          <img src="/images/main-banner/dot-5.png" alt="image" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
      </div>
    </>
  );
};

export default MainBanner;
