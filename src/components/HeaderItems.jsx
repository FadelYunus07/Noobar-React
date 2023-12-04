import React from "react";

function HeaderItems({ name, icon, link }) {
  return (
    <div className="text-white text-[16px] font-semibold gap-3 flex items-center cursor-pointer m-2">
      <a href={link} className="hover:underline underline-offset-8">
        <i className={`pe-3 ${icon}`}></i>
        {name}
      </a>
    </div>
  );
}

export default HeaderItems;
