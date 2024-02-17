import React from "react";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div id="about" className="about-area pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image">
                <img
                  src="/images/about/about-3.jpg"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-wrap-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="about-bg-text">ABOUT</div>
                <span>WHAT IS OWLEY</span>
                <h3>
                  Empowering Education
                </h3>
                <p>
                Owley leverages OpenAI's cutting-edge technology to offer a unique study tool. It’s not just an app; it's a revolution in how we approach learning, making knowledge acquisition more accessible than ever.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <h3>Your Study Partner</h3>
                  <p>
                  Whether you're a student, professional, or lifelong learner, Owley is designed for you. With intuitive design and seamless functionality, it’s your go-to app for mastering new subjects and skills.
                  </p>

                  {/* <div className="about-btn">
                    <Link href="/about">
                      <a className="default-btn">
                        More About Owley
                      </a>
                    </Link>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h3>A New Era of Learning</h3>
                  <p>
                  Owley is more than a flashcard maker; it's a tool that breaks barriers to education. With AI-driven responses and personalized study decks, it transforms your study sessions into dynamic, interactive experiences.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image">
                    <img src="/images/about/about-4.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <img src="/images/about/about-circle.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
