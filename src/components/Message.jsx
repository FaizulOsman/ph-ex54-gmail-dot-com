import {
  faCheckSquare,
  faClock,
  faDownload,
  faMessage,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Message = ({ messages }) => {
  const [filterMessage, setFilterMessage] = useState(messages);
  const handleFilterMessage = (id) => {
    const except = filterMessage.filter((mesg) => mesg.id !== id);
    setFilterMessage(except);
  };

  return (
    <div>
      {filterMessage.map((message) => (
        <Link to={`/inbox/message/${message.id}`}>
          <div className="flex items-center p-3 border-b">
            <div className="flex w-1/12">
              <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
              <input
                type="radio"
                className="mask mask-star-2 ml-5 bg-orange-600"
              />
            </div>
            <div className="flex w-9/12">
              <p className="ml-5 w-2/12">{message.email.slice(0, 13)}</p>
              <p className="ml-5 w-3/12">{message.name.slice(0, 20)}</p>
              <p className="ml-5 w-7/12">{message.body.slice(0, 50)}...</p>
            </div>
            <div
              className="flex w-2/12 justify-between"
              onClick={() => handleFilterMessage(message.id)}
            >
              <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Message;
