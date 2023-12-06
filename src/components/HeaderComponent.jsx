import React, { useState } from "react";
import logo from "../assets/image/Noobar color.svg";
import avatar from "../assets/image/avatar.png";
import { link } from "../assets/data/source";
import HeaderItems from "./HeaderItems";
import { Link } from "react-router-dom";

function HeaderComponent() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="items-center flex justify-between mx-5">
      <div className="flex gap-8 md:gap-5 items-center p-5">
        <Link to={"/"}>
          <img src={logo} className="w-[80px] md:w-[110px]" alt="Logo" />
        </Link>
        <div className="hidden md:flex gap-8">
          {link.map((navlink) => (
            <HeaderItems name={navlink.text} icon={navlink.icon} link={navlink.path} />
          ))}
        </div>
        <div className="flex md:hidden gap-0 sm:gap-8">
          {link.map((navlink, index) => index < 3 && <HeaderItems name={""} icon={navlink.icon} link={navlink.path} />)}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} icon={"fa fa-ellipsis-v"} link={"#"} />
            {toggle ? (
              <div className="absolute bg-gray-800 border-[1px] border-gray-700 p-3 rounded-lg px-5 py-4">{link.map((navlink, index) => index > 2 && <HeaderItems name={navlink.text} icon={navlink.icon} link={navlink.path} />)}</div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={avatar} alt="Avatar" className="w-[50px] rounded-full me-3" />
    </div>
  );
}

export default HeaderComponent;
