import {
  faArrowLeft,
  faArrowRight,
  faEllipsisVertical,
  faKeyboard,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InsideTopHeader = () => {
  return (
    <div className="w-11/12 mx-auto bg-white p-4 sticky top-16 rounded-md">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-6">
          <input type="checkbox" checked className="checkbox checkbox-sm" />
          <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
        </div>
        <div className="flex items-center gap-6">
          <p>1-7 of 7</p>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default InsideTopHeader;
