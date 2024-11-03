import React from "react";
import { BiPhone } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <div className="flex justify-center gap-24">
      <div className="flex flex-col py-12">
        <h2 className="text-sm font-bold tracking-wide text-[#252B42]">
          Company Info
        </h2>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-5"
          href="#"
        >
          About Us
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Carrier
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          We are hiring
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Blog
        </a>
      </div>
      <div className="flex flex-col py-12">
        <h2 className="text-sm font-bold tracking-wide text-[#252B42]">
          Legal
        </h2>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-5"
          href="#"
        >
          About Us
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Carrier
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          We are hiring
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Blog
        </a>
      </div>
      <div className="flex flex-col py-12">
        <h2 className="text-sm font-bold tracking-wide text-[#252B42]">
          Features
        </h2>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-5"
          href="#"
        >
          Business Marketing
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          User Analytic
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Live Chat
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Unlimited Support
        </a>
      </div>
      <div className="flex flex-col py-12">
        <h2 className="text-sm font-bold tracking-wide text-[#252B42]">
          Resources
        </h2>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-5"
          href="#"
        >
          IOS & Android
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Watch a Demo
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          Customers
        </a>
        <a
          className="text-xs font-bold tracking-wide text-[#737373] mt-2.5"
          href="#"
        >
          API
        </a>
      </div>
      <div className="flex flex-col py-12">
        <h2 className="text-sm font-bold tracking-wide text-[#252B42]">
          Get In Touch
        </h2>
        <div className="flex items-center gap-2.5 mt-5">
          <BiPhone size={24} color="#57C192" />
          <h2 className="text-[#737373] text-sm font-bold tracking-wide">
            (480) 555-0103
          </h2>
        </div>
        <div className="flex items-center gap-2.5 mt-2.5">
          <GrLocation size={24} color="#57C192" />
          <h2 className="text-[#737373] text-sm font-bold tracking-wide w-72">
            4517 Washington Ave. Manchester, Kentucky 39495
          </h2>
        </div>
        <div className="flex items-center gap-2.5 mt-2.5">
          <IoIosMail size={24} color="#57C192" />
          <h2 className="text-[#737373] text-sm font-bold tracking-wide">
            debra.holt@example.com
          </h2>
        </div>
      </div>
    </div>
  );
}
