import React from "react";

const Footer = () => {
  return (
    <div className="w-10/12 fixed right-0 bottom-0">
      <div className="flex bg-white justify-between items-center p-2 rounded-md">
        <div className="">
          <progress className="progress w-56" value="10" max="100"></progress>
          <p>3.22 GB of 15 GB used</p>
        </div>
        <div className="">
          <p>Terms · Privacy · Program Policies</p>
        </div>
        <div className="">
          <p>Last account activity: 43 minutes ago</p>
          <p>Details</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
