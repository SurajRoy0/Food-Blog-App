import React from "react";

const Article = ({ title, url, para }) => {
  return (
    <div className="border border-gray-400 rounded-3xl w-full m-5">
      <div className="overflow-hidden m-5 rounded-3xl">
        <img
          src={url}
          alt={title}
          className="w-full hover:scale-150 transform transition  ease-in-out"
        />
      </div>

      <div className="m-6">
        <h1 className="text-xl font-bold text-blue-950 mb-4">{title}</h1>
        <p className="line-clamp-3 text-gray-600 mb-6">{para}</p>
        <div className="text-center md:text-start">
          <button className="border border-gray-600 text-gray-600 rounded-full md:py-3  py-1 px-9 mb-6 hover:bg-red-600 hover:text-white transition ease-linear">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
