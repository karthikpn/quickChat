import React from "react";
import "../views/message.css";
const Message = ({ message }) => {
  return (
    <div className={`messages ${message.sender ? "sent" : "receive"}`}>
      <img
        src="/images/avatar.png"
        alt="Avatar"
        style={{
          borderRadius: "50%",
          height: "30px",
          width: "30px",
        }}
      />
      <div className="m">
        <div className={`message`}>
          <p style={{ fontSize: "0.75rem" }}>{message.message}</p>
        </div>
        <p style={{ fontSize: "0.65rem", marginTop: "-0.5vh", color: "gray" }}>
          9h
        </p>
      </div>
    </div>
  );
};

export default Message;
