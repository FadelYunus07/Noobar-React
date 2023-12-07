import React, { useState } from "react";
import logo from "../assets/image/Noobar color.svg";
import avatar from "../assets/image/avatar.png";
import { link } from "../assets/data/source";
import HeaderItems from "./HeaderItems";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

function HeaderComponent() {
  const [toggle, setToggle] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  return (
    <div className="items-center flex justify-between fixed z-[99] bg-[#131313] w-full px-5 border-b-[4px] border-b-blue-800">
      <div className="flex gap-4 md:gap-5 lg:gap-8 items-center px-0 py-3 md:px-5 md:py-5">
        <Link to={"/"}>
          <img src={logo} className="md:w-[110px] sm:w-[80px] w-[50px]" alt="Logo" />
        </Link>
        <div className="hidden md:flex gap-8">
          {link.map((navlink) => (
            <HeaderItems name={navlink.text} icon={navlink.icon} link={navlink.path} />
          ))}
          <div onClick={toggleSearch}>
            <h1 className="text-white text-[16px] mt-2 font-semibold gap-3 flex items-center cursor-pointer">
              <i className="fa fa-magnifying-glass font-bold"></i>SEARCH
            </h1>
          </div>
        </div>
        <div className="flex md:hidden gap-0 sm:gap-8">
          {link.map((navlink, index) => index < 3 && <HeaderItems name={""} icon={navlink.icon} link={navlink.path} />)}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} icon={"fa fa-ellipsis-v"} link={"#"} />
            {toggle ? (
              <div className="absolute bg-gray-800 border-[1px] border-gray-700 p-3 rounded-lg px-5 py-4">
                {link.map((navlink, index) => index > 2 && <HeaderItems name={navlink.text} icon={navlink.icon} link={navlink.path} />)}
                <div onClick={toggleSearch}>
                  <h1 className="text-white text-[16px] font-semibold gap-3 flex items-center cursor-pointer">
                    <i className="fa fa-magnifying-glass font-bold"></i>SEARCH
                  </h1>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {showSearch && <SearchComponent onClose={closeSearch} />}
      </div>
      <img src={avatar} alt="Avatar" className="w-[30px] m-1 md:w-[50px] sm:w-[40px] rounded-full me-3" />
    </div>
  );
}

export default HeaderComponent;
