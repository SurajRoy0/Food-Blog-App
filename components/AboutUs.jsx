import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 md:mt-[8em] gap-16 flex md:flex-row flex-col justify-between items-center py-[80px] md:py-0 px-6 md:px-[12rem] md:h-[65vh]">
      <div className="h-full w-1/2 hidden md:block">
        <img src="/about.png" alt="about" className="h-full" />
      </div>
      <div className="h-full md:w-1/2 w-full flex flex-col md:items-start items-center justify-center gap-7">
        <h1 className="md:text-4xl text-2xl font-bold text-blue-950 m-0">
          About Us
        </h1>
        <p className="text-gray-500 md:text-start text-center text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="bg-red-600 text-xl text-white md:py-2 md:px-6 py-1 px-4 rounded-full hover:bg-white hover:border hover:border-gray-500 hover:text-gray-700 transition-all">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
