import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaCartArrowDown, FaPhone } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaRegHeart } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="flex flex-col gap-5 px-20 py-20">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src="https://wp.themepure.net/shofy/wp-content/uploads/elementor/thumbs/logo-qbwhep5h2d8f5rgpuhi5qvfrhlotuahm95nf0gmdp0.png" alt="image" />
        </Link>
        <div className="flex items-center">
          <div className="flex items-center justify-between border-2 p-3 border-blue-500">
            <input
              type="text"
              placeholder="Search for Products..."
              className="outline-none mr-6"
            />
            <span className="border border-slate-400 w-0 h-6 mx-4" />
            <select className="outline-none mr-8">
              <option>All items</option>
              <option>Electronics</option>
              <option>Phones</option>
            </select>
          </div>
          <div className="bg-blue-500 text-white p-4 cursor-pointer">
            <FaSearch size={20} />
          </div>
        </div>

        <div className="flex items-center gap-5 cursor-pointer">
          <p className="border-2 border-slate-300 p-4 text-slate-500 rounded-full">
            <FaUser size={22} />
          </p>
          <div>
            <p className="text-slate-500 font-semibold text-sm">
              Hello Sign In
            </p>
            <p className="font-semibold">Your Account</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <p className="relative">
            <FaArrowRightArrowLeft size={22} className="rotate-90 cursor-pointer" />
            <span className="py-0 px-2 bg-red-500 text-white absolute bottom-4 left-3 rounded-full">
              0
            </span>
          </p>
          <p className="relative">
            <FaRegHeart size={22} className="cursor-pointer"/>
            <span className="py-0 px-2 bg-red-500 text-white absolute bottom-4 left-3 rounded-full">
              0
            </span>
          </p>
          <p className="relative">
            <FaCartArrowDown size={22} className="cursor-pointer"/>
            <span className="py-0 px-2 bg-red-500 text-white absolute bottom-4 left-3 rounded-full">
              0
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around border-t-2 border-slate-500 border-b-2">
        <div className="flex items-center justify-center gap-7">
          <Link to='/' className="text-xl font-semibold my-3">Home</Link>
          <Link to='/products' className="text-xl font-semibold my-3">Products</Link>
          <Link to='/about' className="text-xl font-semibold my-3">About</Link>
          <Link to='/contact' className="text-xl font-semibold my-3">Contact</Link>
        </div>
        <div className="flex items-center mt-5 justify-center gap-3 my-3">
          <FaPhone className="rotate-90 text-blue-500 " size={22} />
          <div>
            <p className="text-slate-500 text-sm font-semibold">Hotline:</p>
            <p className="font-semibold">+998 99 123 45 67</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
