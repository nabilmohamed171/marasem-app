"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import "./paginations.css";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleDropdownPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="number-pages d-md-block d-sm-none">
      <div className="container">
        <div className="number">
          <span
            className="first"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <IoIosArrowBack />
          </span>

          {getPageNumbers().map((pageNumber) => (
            <span
              key={pageNumber}
              className={currentPage === pageNumber ? "active" : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </span>
          ))}

          <span
            className="last"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <IoIosArrowForward />
          </span>

          <div className="dropdown-number-pages">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {itemsPerPage}
              </button>
              <ul className="dropdown-menu">
                {getPageNumbers().map((pageNumber) => (
                  <li key={pageNumber}>
                    <Link href="#" className="reser-link" passHref>
                      <span
                        className="dropdown-item"
                        onClick={() => handleDropdownPageChange(pageNumber)}
                      >
                        {pageNumber}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
