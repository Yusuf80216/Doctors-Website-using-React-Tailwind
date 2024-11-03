import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Bottom() {
  return (
    <div className="flex py-6 justify-between px-48 bg-[#FAFAFA]">
      <p className="text-sm text-[#737373] font-bold tracking-wide">
        Made With Love By Yusuf using Vite | React | Tailwind
      </p>
      <div className="flex gap-5">
        <a href="https://www.facebook.com/">
          <FaFacebook size={24} color="#57C192" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram size={24} color="#57C192" />
        </a>
        <a href="https://www.twitter.com/">
          <FaTwitter size={24} color="#57C192" />
        </a>
      </div>
    </div>
  );
}
