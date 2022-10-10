import React from "react";
import { useLoaderData } from "react-router-dom";

const MessageDetails = () => {
  const { name, email, body } = useLoaderData();

  return (
    <div className="flex flex-col gap-5 font-semibold w-6/12 mx-auto mt-20">
      <h2>Email: {email}</h2>
      <p className="text-sm">Subject: {name}</p>
      <p className="text-sm">Message: {body}</p>
    </div>
  );
};

export default MessageDetails;
