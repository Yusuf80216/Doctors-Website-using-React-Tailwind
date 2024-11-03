import React from "react";

import ClientCard from "./ClientCard";

export default function Client() {
  return (
    <div className="flex justify-center bg-[#E9EBFF]">
      <div className="flex flex-col justify-center py-40 gap-2.5">
        <h3 className="text-[#2DA673] text-sm font-bold tracking-wide">
          Practice Advice
        </h3>
        <h1 className="text-4xl font-bold tracking-wide">
          Each client is important
        </h1>
        <p className="text-sm w-[30rem] tracking-wide text-[#737373]">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex gap-4 mt-20">
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </div>
  );
}
