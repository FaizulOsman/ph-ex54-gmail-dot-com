import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import InboxNavigation from "./InboxNavigation";
import InsideTopHeader from "./InsideTopHeader";

const Inbox = () => {
  const comments = useLoaderData();

  return (
    <div className="w-10/12">
      <InsideTopHeader></InsideTopHeader>
      <InboxNavigation></InboxNavigation>
      <Outlet comments={comments} key={comments.id}></Outlet>
    </div>
  );
};

export default Inbox;
