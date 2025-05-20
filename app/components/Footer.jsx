import React from "react";
import Logo from "./Logo";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between space-x-10  border-t-1 border-gray-200 mt-25 pt-3">
      <div className="flex justify-center items-center mt-5">
        <Logo />
      </div>

      <div className="text-gray-400 flex flex-row items-center justify-center space-x-10 my-4 py-4">
        <p>Track Orders</p>
        <p>In-Store Pickup</p>
        <p>Gift Cards</p>
        <p>Subscribe</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 my-4 pb-3">
        <SlSocialInstagram className="h-5 w-5" />
        <SlSocialFacebook className="h-5 w-5" />
        <TiSocialTwitter className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Footer;
