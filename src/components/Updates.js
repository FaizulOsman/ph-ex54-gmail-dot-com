import React from "react";
import { useLoaderData } from "react-router-dom";
import Message from "./Message";

const Updates = () => {
  const messages = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <Message messages={messages} key={messages.id}></Message>
    </div>
  );
};

export default Updates;
