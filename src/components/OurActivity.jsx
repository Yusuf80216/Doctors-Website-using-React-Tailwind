import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { TbStethoscope } from "react-icons/tb";

export default function OurActivity() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center py-20">
        <p className=" text-sm leading-6 text-[#2DA673]">Practice Advice</p>
        <h2 className=" mt-2.5 text-4xl font-bold leading-[3rem]">
          Our Activity
        </h2>
        <p className=" mt-2.5 w-[29rem] bg-red text-start text-sm">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="mt-20 flex gap-8">
          <div className="flex flex-col gap-5 pt-8 pl-10 w-80 h-64 shadow-md">
            <div className="flex w-16 h-16 bg-[#FBEBE8] rounded-full items-center justify-center">
              <FaHeartbeat className="text-[#E74040]" size={32} />
            </div>
            <h2>Quick Examination</h2>
            <div className="w-12 h-0.5 bg-[#E74040]"></div>
            <p>The gradualaccumulation of information about</p>
          </div>
          <div className="flex flex-col gap-5 pt-8 pl-10 w-80 h-64 shadow-md">
            <div className="flex w-16 h-16 bg-[#FBEBE8] rounded-full items-center justify-center">
              <TbStethoscope className="text-[#E74040]" size={32} />
            </div>
            <h2>Online Appointment</h2>
            <div className="w-12 h-0.5 bg-[#E74040]"></div>
            <p>The gradualaccumulation of information about</p>
          </div>
          <div className="flex flex-col gap-5 pt-8 pl-10 w-80 h-64 shadow-md">
            <div className="flex w-16 h-16 bg-[#FBEBE8] rounded-full items-center justify-center">
              <FaPrescriptionBottleMedical
                className="text-[#E74040]"
                size={32}
              />
            </div>
            <h2>Painless procedures</h2>
            <div className="w-12 h-0.5 bg-[#E74040]"></div>
            <p>The gradualaccumulation of information about</p>
          </div>
        </div>
      </div>
    </div>
  );
}
