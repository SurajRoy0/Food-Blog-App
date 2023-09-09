import React, { useState } from "react";
import Article from "./Article";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

let paraDemo =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.";

const articles = [
  {
    id: "a1",
    title: "Grilled  Tomatoes at Home",
    url: "/rec1.png",
    para: paraDemo,
  },
  {
    id: "a2",
    title: "Snacks for Travel",
    url: "/rec2.png",
    para: paraDemo,
  },
  {
    id: "a3",
    title: "Post-workout Recipes",
    url: "/rec3.png",
    para: paraDemo,
  },
  {
    id: "a4",
    title: "How To Grill Corn",
    url: "/rec4.png",
    para: paraDemo,
  },
  {
    id: "a5",
    title: "Crunchwrap Supreme",
    url: "/rec5.png",
    para: paraDemo,
  },
  {
    id: "a6",
    title: "Broccoli Cheese Soup",
    url: "/rec6.png",
    para: paraDemo,
  },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const totalItems = articles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = articles.slice(startIndex, endIndex);
  return (
    <section id="articles" className="md:mt-[8em] mt-[4em] md:px-[7rem] px-3">
      <h1 className=" md:text-start text-center md:ml-4 text-3xl md:text-4xl font-semibold text-blue-950">
        Latest Articles
      </h1>
      <div className="md:mt-[3em] mt-[2em] md:flex-row flex-col flex justify-between items-center">
        {itemsToDisplay?.map((article) => (
          <Article
            title={article.title}
            url={article.url}
            para={article.para}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? "border border-gray-400 text-gray-400"
              : "border border-gray-600 text-gray-600"
          }  p-1 rounded-md`}
        >
          <FaChevronLeft />
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? "border border-gray-400 text-gray-400"
              : "border border-gray-600 text-gray-600"
          }  p-1 rounded-md`}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Articles;
