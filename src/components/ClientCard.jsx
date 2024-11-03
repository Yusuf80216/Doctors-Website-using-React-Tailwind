import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

export default function ClientCard() {
  return (
    <div className="w-[22rem] h-[20rem] bg-white flex flex-col justify-center items-center">
      <div className="flex text-[#F3CD03]">
        <HiStar size={22} />
        <HiStar size={22} />
        <HiStar size={22} />
        <HiStar size={22} />
        <HiOutlineStar size={22} />
      </div>
      <p className="text-[#737373] text-sm text-center mt-4 w-40 tracking-wide">
        Slate helps you see how many more days you need to work to reach your
        financial goal for the month and year.
      </p>
      <div className="flex items-center mt-7 gap-4">
        <img src="client-1.png" />
        <div>
          <h3 className="text-[#2DA673] font-bold text-sm tracking-wider">
            Regina Miles
          </h3>
          <p className="text-xs tracking-wider">Designer</p>
        </div>
      </div>
    </div>
  );
}
