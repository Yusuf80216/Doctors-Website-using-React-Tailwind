import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#e9ebff] flex justify-between items-center pt-16">
      <div className=" flex flex-col ml-32 gap-7">
        <h3 className="text-base text-[#57C192] tracking-wide font-bold">
          Best dental surgeons
        </h3>
        <h1 className="text-6xl font-bold tracking-wide leading-snug">
          Meet the Best
          <br />
          Doctors
        </h1>
        <p className="text-xl max-w-[28rem] text-[#737373]">
          We are always fully focused on helping your child and you
        </p>
        <div className="flex gap-2.5">
          <button className="w-48 h-12 bg-[#57C192] text-white rounded-md text-sm font-bold tracking-wide">
            Get Quote Now
          </button>
          <button className="w-48 h-12 bg-transparent text-[#57C192] border-2 border-[#57C192] rounded-md font-bold text-sm tracking-wide">
            Learn More
          </button>
        </div>
      </div>
      <img src="hero-doc.png" alt="hero-doc" />
    </div>
  );
}
