import React from "react";
import { Link } from "react-router-dom";

function HeaderItems({ name, icon, link }) {
  return (
    <div className="text-white text-[16px] font-semibold gap-3 flex items-center cursor-pointer m-2">
      <Link to={link} className="hover:underline underline-offset-8">
        <i className={`pe-3 ${icon}`}></i>
        {name}
      </Link>
    </div>
  );
}

export default HeaderItems;
