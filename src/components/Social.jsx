import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="flex flex-col gap-5 font-semibold w-6/12 mx-auto mt-20">
      <h2>Your Social tab is empty.</h2>
      <p className="text-sm">
        Emails from social networks, media-sharing sites, dating services and
        other social sites will be shown here.
      </p>
      <p className="text-sm">
        To add or remove tabs click{" "}
        <Link to="/" className="underline text-blue-600">
          inbox settings.
        </Link>
      </p>
    </div>
  );
};

export default Social;
