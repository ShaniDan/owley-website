import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area with-black-background">
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                &copy; Owley.ai created by {' '}
                <a
                  href="https://github.com/ShaniDan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shani
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
