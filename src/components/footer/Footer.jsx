import React from "react";
import "./Footer.css";

import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="max-width">
          <div className="container">
            <div className="desc">
              <div className="logo">Visit Figuig</div>
              <div className="text">
              For a unique travel experience, enjoy our Oasis.<br></br>
              With a wide variety of art, music, theater, sports <br></br>and events,
               there’s something for everyone during<br></br> your journey.
              </div>
            </div>
            <div className="navigation">
              <div className="title">Navigation</div>
              <ul className="lists">
              <Link to="/do" className="link-without-underline"><li>See & Do</li></Link>
              <Link to="/understand" className="link-without-underline"><li>Plan Your Trip</li></Link>
              <Link to="/travel-safety-tips" className="link-without-underline"> <li>Travel Essentials</li></Link>
              <Link to="/eat" className="link-without-underline"><li>Experiences</li></Link>
                </ul>
            </div>
            <div className="faq">
              <div className="title">Help & Faqs</div>
              <ul  className="lists">
                <li>Help Center</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="max-width">
          <div className="content">
            Copyright 2023 | Powered By AZNAY technologies.
          </div>
        </div>
      </div>
    </footer>
  );
}
