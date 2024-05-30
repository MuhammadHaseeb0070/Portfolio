// footer.js
import React from "react";
import "./footer.css";
import SocialMediaLink from "../SocialMediaLink";
import linkedin from "../../images/lin.png";
import fb from "../../images/fb.png";
import whatsapp from "../../images/whatsapp.png";
import instagram from "../../images/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Web Developer <br />
        <span>
          From <span>Pakistan</span>
        </span>
      </p>
      <div className="socialAccounts">
      <SocialMediaLink  platform="facebook" profileName="haseeb.arain.14268" imagePath={fb}></SocialMediaLink>
      <SocialMediaLink  platform="linkedin" profileName="muhammad-haseeb-b4544a257" imagePath={linkedin}></SocialMediaLink>
      <SocialMediaLink  platform="whatsapp" profileName="+923133478691" imagePath={whatsapp}></SocialMediaLink>
      <SocialMediaLink  platform="instagram" profileName="muhammadhaseeb928" imagePath={instagram}></SocialMediaLink>
      </div>
    </div>
  );
};

export default Footer;
