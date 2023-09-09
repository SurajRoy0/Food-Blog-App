import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row-reverse w-full justify-between md:h-screen">
      <div className="md:w-1/2 w-full relative">
        <img src="/head.png" alt="pizza" className="w-full h-full" />
        <button className="text-sm md:text-base absolute md:top-7 md:right-12  top-5 right-4 border border-white text-white rounded-full md:py-2 md:px-4 py-1 px-3">
          Get In Touch
        </button>
      </div>
      <div className="md:w-1/2  w-full flex flex-col md:items-start  items-center gap-[7em] md:pl-[6em]">
        <div className="mt-6 hidden md:block">
          {" "}
          <Image src="/delivery.png" alt="delivery" width={100} height={100} />
        </div>

        <div className="md:text-start text-center md:w-[350px] mt-10 md:mt-0">
          <span className="md:text-6xl text-3xl font-bold text-blue-950 block mb-7">
            Discover the
            <span className="text-red-600"> Best </span>
            Food and Drinks
          </span>

          <span className="text-gray-500 font-semibold mb-7 block px-3 md:px-0">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </span>
          <button className="bg-red-600 md:text-xl text-lg text-white py-2 px-6 md:py-4 md:px-9 rounded-full mb-16  hover:bg-white hover:border hover:border-gray-500 hover:text-gray-700 transition-all">
            Explore Now!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
