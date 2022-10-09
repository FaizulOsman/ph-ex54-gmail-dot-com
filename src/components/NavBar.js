import {
  faAngleDown,
  faAngleRight,
  faCaretRight,
  faCircleExclamation,
  faClock,
  faFile,
  faImage,
  faMessage,
  faPaperPlane,
  faPen,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isTrue, setIsTrue] = useState(true);
  const handleMore = () => {
    setIsTrue(!isTrue);
    console.log(isTrue);
  };
  return (
    <div className="flex flex-col w-2/12">
      <button className="btn btn-info bg-opacity-40 m-3 w-7/12">
        <FontAwesomeIcon className="mr-3" icon={faPen}></FontAwesomeIcon>
        Compose
      </button>
      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "skyblue" } : undefined
        }
        className="py-2 pl-8 hover:bg-sky-200 rounded-md"
        to="/inbox"
      >
        <FontAwesomeIcon className="mr-4" icon={faImage}></FontAwesomeIcon>
        Inbox
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "skyblue" } : undefined
        }
        className="py-2 pl-8 hover:bg-sky-200 rounded-md"
        to="/starred"
      >
        <FontAwesomeIcon className="mr-4" icon={faStar}></FontAwesomeIcon>
        Starred
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "skyblue" } : undefined
        }
        className="py-2 pl-8 hover:bg-sky-200 rounded-md"
        to="/snoozed"
      >
        <FontAwesomeIcon className="mr-4" icon={faClock}></FontAwesomeIcon>
        Snoozed
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "skyblue" } : undefined
        }
        className="py-2 pl-8 hover:bg-sky-200 rounded-md"
        to="/important"
      >
        <FontAwesomeIcon className="mr-4" icon={faAngleRight}></FontAwesomeIcon>
        Important
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "skyblue" } : undefined
        }
        className="py-2 pl-8 hover:bg-sky-200 rounded-md"
        to="/sent"
      >
        <FontAwesomeIcon className="mr-4" icon={faPaperPlane}></FontAwesomeIcon>
        Sent
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive ? { backgroundColor: "skyblue" } : undefined
        }
        className="py-2 pl-8 hover:bg-sky-200 rounded-md"
        to="/draft"
      >
        <FontAwesomeIcon className="mr-4" icon={faFile}></FontAwesomeIcon>
        Draft
      </NavLink>
      <NavLink
        className="py-2 pl-8 hover:bg-sky-200 rounded-md"
        onClick={handleMore}
      >
        <FontAwesomeIcon className="mr-4" icon={faAngleDown}></FontAwesomeIcon>
        More
      </NavLink>

      <div className={isTrue === true ? "hidden" : "block"}>
        <div className="flex flex-col">
          <NavLink
            style={({ isActive }) =>
              isActive ? { backgroundColor: "skyblue" } : undefined
            }
            className="py-2 pl-8 hover:bg-sky-200 rounded-md"
            to="/charts"
          >
            <FontAwesomeIcon
              className="mr-4"
              icon={faMessage}
            ></FontAwesomeIcon>
            Charts
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { backgroundColor: "skyblue" } : undefined
            }
            className="py-2 pl-8 hover:bg-sky-200 rounded-md"
            to="/spam"
          >
            <FontAwesomeIcon
              className="mr-4"
              icon={faCircleExclamation}
            ></FontAwesomeIcon>
            Spam
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { backgroundColor: "skyblue" } : undefined
            }
            className="py-2 pl-8 hover:bg-sky-200 rounded-md"
            to="/trash"
          >
            <FontAwesomeIcon className="mr-4" icon={faTrash}></FontAwesomeIcon>
            Trash
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive ? { backgroundColor: "skyblue" } : undefined
            }
            className="py-2 pl-8 hover:bg-sky-200 rounded-md"
            to="/categories"
          >
            <FontAwesomeIcon
              className="mr-4"
              icon={faCaretRight}
            ></FontAwesomeIcon>
            Categories
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
