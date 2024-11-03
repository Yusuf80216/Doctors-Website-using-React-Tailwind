import React from "react";
import { SlArrowRight } from "react-icons/sl";

export default function MeetExperts() {
  return (
    <div className="py-40 flex justify-center items-center gap-44">
      <div className="flex flex-col gap-9 items-start">
        <div className="w-24 h-2 bg-[#E74040]"></div>
        <h2 className="text-4xl font-bold">Meet Our Experts</h2>
        <p className="w-[22rem] text-sm tracking-wide text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <button className="flex justify-between items-center w-28 text-sm font-bold tracking-wide text-[#2DA673]">
          Learn More
          <SlArrowRight width={9} />
        </button>
      </div>
      <img src="experts-doc.png" alt="experts-doc" />
    </div>
  );
}
