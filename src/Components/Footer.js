import React from "react";
import facebookIcon from "../Images/Facebook.svg";
import instagramIcon from "../Images/Instagram.svg";
import twitterIcon from "../Images/Twitter.svg";
import linkedinIcon from "../Images/LinkedIN.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer_about">
        <span className="footer_title">ABOUT</span>
        <ul>
          <li>Our story</li>
          <li>Media</li>
          <li>Sustainability</li>
        </ul>
      </div>

      <div className="footer_legal">
        <span className="footer_title">LEGAL STUFF</span>
        <ul>
          <li>Terms of use</li>
          <li>Terms of sale</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="footer_social">
        <span className="footer_title">FOLLOW PUNCHSTORE'S</span>
        <ul>
          <li>
            <a href="https://facebook.com">
              <img src={facebookIcon} width="40px" alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img src={instagramIcon} width="40px" alt="Instagram icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img src={twitterIcon} width="40px" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <img src={linkedinIcon} width="40px" alt="Linkedin icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
