import React from "react";

export default function CountsSection() {
  return (
    <div className="py-20 flex justify-center mx-auto gap-7 text-center text-base font-bold tracking-wider leading-6">
      <div className="w-60">
        <h1 className="text-6xl text-[#57C192] leading-[5rem] ">15K</h1>
        <h2 className="">Happy Customers</h2>
      </div>
      <div className="w-60">
        <h1 className="text-6xl text-[#57C192] leading-[5rem] ">150K</h1>
        <h2 className="">Monthly Visitors</h2>
      </div>
      <div className="w-60">
        <h1 className="text-6xl text-[#57C192] leading-[5rem] ">15</h1>
        <h2 className="">Countries Worldwide</h2>
      </div>
      <div className="w-60">
        <h1 className="text-6xl text-[#57C192] leading-[5rem] ">100+</h1>
        <h2 className="">Top Partners</h2>
      </div>
    </div>
  );
}
