import React, { useState } from "react";
import Logo from "../assets/pngegg.png";
import { NavLink,Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useSearch } from "../context/searchContext";

function Navbar() {
  const { searchItem, setSearchItem } = useSearch();
  const [showHamBurger, setShowHamBurger] = useState(true);

  const handleToggle = () => {
    setShowHamBurger(!showHamBurger);
  };

  return (
    <div className="bg-gray-900 z-10 sticky top-0">
      <nav className=" flex nav gap-y-5 items-center justify-between lg:px-24 px-12 bg-orange-500 py-2">
        <div className="flex items-center gap-2">
          <img
            className="w-16 cursor-pointer bg-white p-1 rounded-md"
            src={Logo}
            alt="Logo"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">Mega Mart</h1>
            <p className="text-xs font-bold text-black">
              By Nitin Yadav
            </p>
          </div>
        </div>
        <div className="lg:flex hidden gap-y-5 gap-x-14 items-center">
          <div className="flex items-center">
            <input
              value={searchItem}
              onChange={(e) => {
                setSearchItem(e.target.value.toLowerCase());
              }}
              type="search"
              className="border-none outline-none px-3 py-1 rounded-l-md"
              placeholder="Search your product"
            />
            <Link
              to={"/search-result"}
              className="bg-white py-1 px-2 rounded-r-md"
            >
              <HiOutlineMagnifyingGlass className="text-2xl" />
            </Link>
          </div>
          <div className=" flex gap-x-14 text-white items-center font-bold">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "black" : "white" };
              }}
              className="hover:scale-110 transition-all"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "black" : "white" };
              }}
              className="hover:scale-110 transition-all"
              to="/allProduct"
            >
              All products
            </NavLink>
            <NavLink
              to="/cart"
              style={({ isActive }) => {
                return { color: isActive ? "black" : "white" };
              }}
            >
              <FaCartPlus className="text-3xl cursor-pointer" />
            </NavLink>
          </div>
        </div>
        <GiHamburgerMenu
          onClick={handleToggle}
          className="text-2xl block lg:hidden cursor-pointer text-white"
        />
      </nav>
      <div
        className={`flex rounded-b-lg border-l border-b gap-x-14 ${
          !showHamBurger ? "flex-col" : "hidden"
        } absolute right-0 top-0 text-white bg-orange-500 w-fit p-5 gap-y-6 font-bold`}
      >
        <RxCross2 onClick={handleToggle} className="text-2xl cursor-pointer" />
        <div className="flex items-center">
          <input
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value.toLowerCase());
            }}
            type="search"
            className="border-none outline-none text-black px-3 py-1 rounded-l-md"
            placeholder="Search your product"
          />
          <Link
            to={"/search-result"}
            className="bg-white py-1 px-2 rounded-r-md text-black"
          >
            <HiOutlineMagnifyingGlass className="text-2xl" />
          </Link>
        </div>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "white" };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "black" : "white" };
          }}
          to="/allProduct"
        >
          All products
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => {
            return { color: isActive ? "black" : "white" };
          }}
        >
          <FaCartPlus className="text-3xl cursor-pointer" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
