import React from "react";

export default function JoinUs() {
  return (
    <div className="flex flex-col justify-center items-center py-40 gap-2.5">
      <p className="text-[#2DA673] text-sm font-bold tracking-wider">
        Newsletter
      </p>
      <h1 className="text-4xl font-bold tracking-wider">JOIN US</h1>
      <p className="text-center text-[#737373] text-sm tracking-wider">
        Problems trying to resolve the conflict between
        <br />
        the two major realms of Classical physics: Newtonian mechanics
      </p>
      <div className="flex mt-16">
        <form className="flex">
          <input
            type="text"
            placeholder="Your Email"
            className="border-2 w-[43rem] h-14 border-[#E6E6E6] pl-5 rounded-tl-md rounded-bl-md text-[#737373]"
          />
          <button className="bg-[#57C192] border-t-2 border-r-2 border-b-2 border-[#E6E6E6] text-[#F9F9F9] w-28 rounded-tr-md rounded-br-md text-sm tracking-wider leading-6">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
