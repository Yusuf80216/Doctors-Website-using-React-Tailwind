import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex h-20 items-center pl-48 pr-64 bg-[#E9EBFF]">
      <h2 className="text-2xl font-bold">MedicalGenic</h2>
      <ul className="flex gap-5 ml-14 text-[#737373] text-sm font-bold tracking-wider">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="flex absolute right-64 gap-11">
        <button className="text-[#57C192] font-bold text-sm tracking-wider">
          Login
        </button>
        <button className="flex justify-between items-center px-5 w-32 h-12 bg-[#57C192] rounded-md text-white text-sm font-bold uppercase tracking-wider">
          Join Us
          <FaArrowRight className="bg-transparent" />
        </button>
      </div>
    </div>
  );
}
