import React from "react";
// import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaBlogger, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { allServices } from "../contant";
import logo from "../assets/logo/logo.png";
import { BiMapPin } from "react-icons/bi";

const Footer = () => {
  return (
    // [#17012C]
    <div className="bg-white py-[3rem] text-black border-t border-primary">
      <div className="px-5 sm:px-10 flex flex-col gap-3 sm:flex-row justify-between">
        <div className="flex flex-col gap-3 items-start">
          {/* <img
            loading="lazy"
            src={logo}
            alt="logo"
            className="h-[4rem] object-contain"
          /> */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              <img src={logo} alt="logo" className="h-[3rem] sm:h-[4rem]" />
              {/* Aithrown */}
            </Link>
          </div>
          <p className="max-w-[25rem]">
            Follow us on our social media handles to keep up to date with our
            latest work and announcements.
          </p>
          <div>
            <div className="flex items-center gap-2">
              <BiMapPin className="w-5 h-5" />
              <h3 className="font-semibold text-lg">Registered office</h3>
            </div>
            <p className="text-sm">Kerala - IN</p>
          </div>
          <div className="flex mt-3 gap-5 items-center">
            <Link to={"https://aithrown.blogspot.com/?m=1"}>
              <FaBlogger className="text-2xl" />
            </Link>
            <Link
              to={
                "https://www.instagram.com/aithrown_official?igsh=MW45Y2RxbGg4bGZlYQ=="
              }
            >
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link>
              <GrFacebookOption className="text-2xl" />
            </Link>
            <Link to={"https://www.linkedin.com/company/aithrown/"}>
              <GrLinkedinOption className="text-2xl" />
            </Link>
          </div>
          {/* <p className="max-w-[25rem] mt-3">Address: {clientDetails.address}</p> */}
        </div>
        <div className="flex flex-col mt-6 sm:mt-0 sm:flex-row gap-7 md:gap-14">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Our Services</p>
            {allServices.map((item) => (
              <Link key={item.id} to={item.link} className="cursor-pointer">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/about-us" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/services" className="cursor-pointer">
              Services
            </Link>
            <Link to="/industries" className="cursor-pointer">
              Industries
            </Link>
            <Link className="cursor-pointer">Blogs</Link>
            <Link to="/contact-us" className="cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
