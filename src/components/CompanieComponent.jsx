import React from "react";
import { companies } from "../assets/data/source";

function CompanieComponent() {
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {companies.map((comp) => {
        return (
          <div key={comp.id} className="border-[2px] border-gray-600 rounded-lg cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out relative shadow-xl shadow-black">
            <video src={comp.vid} autoPlay loop playsInline className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"></video>
            <img src={comp.img} alt={comp.title} className="w-full z-[1]" />
          </div>
        );
      })}
    </div>
  );
}

export default CompanieComponent;
