import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

const Navsm = () => {
  return (
    <>
      <div className="text-white flex justify-between items-center ">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex cursor-pointer items-center  hover:text-white">
            Bhopal <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const Navmd = () => {
  return (
    <>
      <div className="flex w-full gap-3 items-center ">
        <div className="w-10 h-10">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
          />
        </div>
      </div>
    </>
  );
};

const Navlg = () => {
  return (
    <>
      <div className="container flex mx-auto justify-between px-4 items-center ">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Bhopal <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Mobile Screen size NavBar */}
      <div className="md:hidden">
        <Navsm />
      </div>
      {/* Medium/Tab Screen size NavBar */}
      <div className="hidden md:flex lg:hidden">
        <Navmd />
      </div>
      {/* Large Screen size NavBar */}
      <div className="hidden md:hidden lg:flex">
        <Navlg />
      </div>
    </nav>
  );
};

export default Navbar;
