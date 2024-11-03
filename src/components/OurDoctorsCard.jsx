import React from "react";
import { BsCart2, BsDownload } from "react-icons/bs";
import { IoMdEye, IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineStarPurple500,
} from "react-icons/md";

export default function (props) {
  const { imgPath, subTitle, title } = props;

  return (
    <div className="w-80">
      <div className="relative">
        <p className="flex justify-center items-center absolute top-5 left-4 w-12 h-6 text-white bg-[#E74040] rounded-sm font-bold text-sm tracking-wide">
          Sale
        </p>
        <img className="h-72" src={imgPath} alt="our-doctors-1" />
        <div className="flex absolute bottom-6 w-full justify-center gap-2.5">
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <IoMdHeartEmpty size={20} />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <BsCart2 size={20} />
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <IoMdEye size={20} />
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="flex mt-6 justify-between">
          <h3 className="text-[#2DA673] text-sm font-bold tracking-wide">
            {subTitle}
          </h3>
          <div className="flex justify-between items-center px-[0.344rem] w-12 h-6 bg-[#26335D] text-white rounded-2xl">
            <MdOutlineStarPurple500 color="#FFCE31" width={16} />
            <p className="text-xs">4.9</p>
          </div>
        </div>
        <h3 className="text-base font-bold mt-2.5">{title}</h3>
        <p className="text-sm w-[17.5rem] mt-2.5 text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="flex mt-2.5 gap-2.5 items-center text-[#737373] text-sm font-bold tracking-wide">
          <BsDownload size={16} />
          <p>15 Sales</p>
        </div>
        <div className="flex gap-[0.313rem] mt-2.5 font-bold">
          <p className="text-[#BDBDBD] line-through">$16.48</p>
          <p className="text-[#2DC071]">$6.48</p>
        </div>
        <button className="flex mt-2.5 items-center justify-between w-40 h-11 border-2 border-[#57C192] rounded-[2.313rem] px-4 font-bold tracking-wide text-sm text-[#57C192]">
          Learn More
          <MdOutlineKeyboardArrowRight size={21} />
        </button>
      </div>
    </div>
  );
}
