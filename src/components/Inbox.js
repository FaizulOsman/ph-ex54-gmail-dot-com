import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import InboxNavigation from "./InboxNavigation";
import InboxTopHeader from "./InboxTopHeader";

const Inbox = () => {
  const comments = useLoaderData();

  return (
    <div className="w-10/12">
      <InboxTopHeader></InboxTopHeader>
      <InboxNavigation></InboxNavigation>
      <Outlet comments={comments} key={comments.id}></Outlet>
    </div>
  );
};

export default Inbox;
