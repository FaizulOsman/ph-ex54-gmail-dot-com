import {
  faBars,
  faChartBar,
  faCircleQuestion,
  faGear,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="./logo.png" alt="logo" />
          </Link>
          <div>
            <div className="form-control  ml-12">
              <label className="input-group">
                <span className="bg-sky-100">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  placeholder="Search in mail"
                  className="input input-bordered w-[600px] bg-sky-100 border-none"
                />
                <span className="bg-sky-100">
                  <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                </span>
              </label>
            </div>
          </div>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full border">
            <FontAwesomeIcon
              className="p-3"
              icon={faCircleQuestion}
            ></FontAwesomeIcon>
          </div>
        </label>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full border">
            <FontAwesomeIcon className="p-3" icon={faGear}></FontAwesomeIcon>
          </div>
        </label>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full border">
            <FontAwesomeIcon className="p-3" icon={faBars}></FontAwesomeIcon>
          </div>
        </label>

        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="user img" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Header;
