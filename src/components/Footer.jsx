import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaGoogle } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-slate-200 flex items-center justify-around p-20 mt-20">
      <div className="flex flex-col">
        <Link to="/">
          <img
            src="https://wp.themepure.net/shofy/wp-content/uploads/elementor/thumbs/logo-qbwhep5h2d8f5rgpuhi5qvfrhlotuahm95nf0gmdp0.png"
            alt="image"
          />
        </Link>
        <p className="font-semibold w-64 my-7">
          We are a team of designers and developers that create high quality
          WordPress
        </p>
        <div className="flex items-center gap-5">
          <p className="cursor-pointer bg-white p-2 hover:bg-blue-400 hover:text-white transition-all duration-300">
            <FaFacebook size={20} />
          </p>
          <p className="cursor-pointer bg-white p-2 hover:bg-blue-400 hover:text-white transition-all duration-300">
            <FaTwitter size={20} />
          </p>
          <p className="cursor-pointer bg-white p-2 hover:bg-blue-400 hover:text-white transition-all duration-300">
            <FaGoogle size={20} />
          </p>
          <p className="cursor-pointer bg-white p-2 hover:bg-blue-400 hover:text-white transition-all duration-300">
            <FaLinkedin size={20} />
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-lg">My Account</p>
        <ul>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Track Orders
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Shipping
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Wishlist
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            My Account
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Order History
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Returns
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-lg">Information</p>
        <ul>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Our Story
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Careers
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Privacy Policy
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Terms & Conditions
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            {" "}
            Latest News
          </li>
          <li className="cursor-pointer text-sm text-slate-500 font-semibold hover:text-blue-400 my-2">
            Contact Us
          </li>
        </ul>
      </div>
      <div>
        <p className="font-bold text-xl mb-4">Talk To Us</p>
        <p className="text-slate-500">Got Questions? Call us</p>
        <p className="font-bold text-xl cursor-pointer hover:text-blue-400 mb-4">
          +998 99 123 45 67
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-blue-400 text-slate-500 mb-2">
          <span>
            <MdOutlineMail size={20} />
          </span>
          <span>shofy@gmail.com</span>
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-blue-400 text-slate-500 mb-2">
          <span>
            <IoLocationOutline size={20} />
          </span>
          <span>79 Sleepy Hollow St. Jamaica, New York 1432</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
