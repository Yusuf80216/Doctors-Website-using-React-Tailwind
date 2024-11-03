import React from "react";

import OurDoctorsCard from "./OurDoctorsCard";

export default function OurDoctors() {
  return (
    <div className="flex justify-center">
      <div className="py-40">
        <p className="text-sm text-[#2DA673] font-bold tracking-wide">
          Practice Advice
        </p>
        <h1 className="text-5xl font-bold mt-2.5 tracking-wide">
          Our Doctors Specialize in you
        </h1>
        <p className="w-[28.938rem] text-sm mt-2.5 text-[#737373]">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex gap-5 mt-20">
          <OurDoctorsCard
            imgPath="our-doctors-1.png"
            subTitle="Emergency Case"
            title="Painless procedures"
          />
          <OurDoctorsCard
            imgPath="our-doctors-2.png"
            subTitle="Book now"
            title="Health Queries"
          />
          <OurDoctorsCard
            imgPath="our-doctors-3.png"
            subTitle="Painless procedures"
            title="Emergency Case"
          />
        </div>
      </div>
    </div>
  );
}
