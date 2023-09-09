import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-[3em] bg-gray-100 flex md:flex-row flex-col justify-between px-[2rem] py-[3rem] md:p-[6rem] gap-7 ">
      <div className="flex justify-center items-center">
        <img src="/delivery.png" alt="truck" className="md:w-auto w-[70px]" />
      </div>

      <div className="flex flex-col justify-center items-start gap-3 max-w-[300px]">
        <h1 className="text-xl font-bold text-blue-950 m-0">Contact Us</h1>
        <span className="text-gray-600 text-sm">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </span>
        <span className="text-gray-600 text-sm">example2020@gmail.com</span>
        <span className="text-gray-600 text-sm">(904) 443-0343</span>
      </div>

      <div className="flex flex-col justify-center items-start gap-3">
        <h1 className="text-xl font-bold text-blue-950 m-0">More</h1>
        <span className="text-gray-600 text-sm cursor-pointer">About Us</span>
        <span className="text-gray-600 text-sm cursor-pointer">Products</span>
        <span className="text-gray-600 text-sm cursor-pointer">Career</span>
        <span className="text-gray-600 text-sm cursor-pointer">Contact Us</span>
      </div>

      <div className="flex flex-col-reverse md:flex-col justify-between md:items-start items-center">
        <div className="md:mb-[70px]">
          <h1 className=" hidden md:block text-xl font-bold text-blue-950 m-0">
            Social Link
          </h1>
          <div className="flex gap-6 justify-start items-center mt-2">
            <span className="text-blue-950">
              <FaInstagram size={30} />
            </span>
            <span className="text-blue-950">
              <FaTwitter size={30} />
            </span>
            <span className="text-blue-950">
              <FaFacebook size={30} />
            </span>
          </div>
        </div>
        <span className="text-gray-600 text-sm mt-3 md:mt-0">
          © 2022 Food Truck Example
        </span>
      </div>
    </footer>
  );
};

export default Footer;
