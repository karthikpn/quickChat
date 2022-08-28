import React, { useState } from "react";
import "../views/chat.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import { GrAttachment } from "react-icons/gr";

import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
const Chat = () => {
  const dispatch = useDispatch();
  const [esend, setEsend] = useState(true);
  const contact = useSelector((state) => state);
  const showConvo = () => {
    dispatch({ type: "SHOW_CONVO", payload: contact });
  };

  const enableSend = (e) => {
    if (e.target.value.trim().length > 0) setEsend(false);
    else setEsend(true);
  };
  const fakechat = useSelector((state) => state.chat);
  return (
    <div className="chat">
      {contact.showConvo ? (
        fakechat.map((message) => (
          <div className="chat__messages">
            <Message message={message} />
          </div>
        ))
      ) : (
        <span></span>
      )}

      <div className="chat__input">
        <GrAttachment />
        <input
          type="text"
          className="chat__input__message"
          placeholder="Enter a message here"
          onChange={enableSend}
        />
        <button
          onClick={showConvo}
          className="chat__input__send"
          disabled={esend}
          style={esend ? { cursor: "not-allowed" } : { cursor: "pointer" }}
        >
          Send <RiSendPlane2Fill />
        </button>
      </div>
    </div>
  );
};

export default Chat;
