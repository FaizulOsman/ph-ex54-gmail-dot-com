import {
  faCircleInfo,
  faImage,
  faPeopleGroup,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const InboxNavigation = () => {
  return (
    <div className="bg-white grid grid-cols-4 gap-5 w-11/12 mx-auto">
      <NavLink
        className={"hover:bg-gray-300 p-4 rounded-md"}
        style={({ isActive }) =>
          isActive
            ? {
                borderBottom: "4px solid blue",
              }
            : undefined
        }
        to="/inbox/primary"
      >
        <FontAwesomeIcon className="mr-4" icon={faImage}></FontAwesomeIcon>
        Primary
      </NavLink>
      <NavLink
        className={"hover:bg-gray-300 p-4 rounded-md"}
        style={({ isActive }) =>
          isActive
            ? {
                borderBottom: "4px solid blue",
              }
            : undefined
        }
        to="/inbox/promotions"
      >
        <FontAwesomeIcon className="mr-4" icon={faTicket}></FontAwesomeIcon>
        Promotions
      </NavLink>
      <NavLink
        className={"hover:bg-gray-300 p-4 rounded-md"}
        style={({ isActive }) =>
          isActive
            ? {
                borderBottom: "4px solid blue",
              }
            : undefined
        }
        to="/inbox/social"
      >
        <FontAwesomeIcon
          className="mr-4"
          icon={faPeopleGroup}
        ></FontAwesomeIcon>
        Social
      </NavLink>
      <NavLink
        className={"hover:bg-gray-300 p-4 rounded-md"}
        style={({ isActive }) =>
          isActive
            ? {
                borderBottom: "4px solid blue",
              }
            : undefined
        }
        to="/inbox/updates"
      >
        <FontAwesomeIcon className="mr-4" icon={faCircleInfo}></FontAwesomeIcon>
        Updates
      </NavLink>
    </div>
  );
};

export default InboxNavigation;
