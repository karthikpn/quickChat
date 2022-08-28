import React from "react";
import "../views/userProfile.css";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const activeContact = useSelector((state) => state);
  return (
    <div className="userprofile">
      {activeContact.name != "" ? (
        <div className="userContacts_user">
          <img
            src="/images/avatar.png"
            alt="Avatar"
            class="avatar"
            style={{ margin: "1vh 0" }}
          />
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--textPrimary)",
              fontWeight: "bold",
              margin: "1vh 0",
            }}
          >
            {activeContact.name}
          </p>
          <p
            style={{
              fontSize: "0.7rem",
              color: "var(--textSecondary)",
              margin: "0 0 1vh 0",
            }}
          >
            {activeContact.email}
          </p>
          <button
            style={{
              padding: "5px 20px",
              background: "white",
              border: "1px solid #0f4cff",
              color: "#0f4cff",
              fontWeight: "bold",
              borderRadius: "10px",
              margin: "1vh 0",
              cursor: "pointer",
            }}
          >
            Archive
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <div className="userprofile_metrics">
        <div className="userprofile_metrics__row1">
          <div className="userprofile_metrics__time">
            <p>13h</p>
            <span style={{ fontSize: "0.7rem", color: "gray" }}>Time</span>
          </div>
          <div
            className="userprofile_metrics__attended"
            style={{ backgroundColor: "#E3F6F3" }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#22BA9C",
              }}
            >
              188
            </p>
            <span style={{ fontSize: "0.7rem", color: "gray" }}>Attended</span>
          </div>
        </div>
        <div className="userprofile_metrics__row1">
          <div
            className="userprofile_metrics__time"
            style={{ backgroundColor: "#F7F3FF" }}
          >
            <p style={{ color: "#6E5BC4" }}>119</p>
            <span style={{ fontSize: "0.7rem", color: "gray" }}>Meeting</span>
          </div>
          <div
            className="userprofile_metrics__attended"
            style={{ backgroundColor: "#FFF1E8" }}
          >
            <p style={{ fontSize: "0.9rem", color: "#FC5524" }}>41</p>
            <span style={{ fontSize: "0.7rem", color: "gray" }}>Rejected</span>
          </div>
        </div>
      </div>
      <div className="userprofile_clients">
        <h3 style={{ fontSize: "1rem", marginTop: "2vh" }}>Onboard Clients</h3>
        <p
          style={{
            fontSize: "0.8rem",
            marginTop: "1vh",
            color: "var(--textSecondary)",
            textAlign: "center",
          }}
        >
          Share the link with prospects and discuss all the stuff
        </p>
        <button className="userprofile_clients__button">Copy Link</button>
      </div>
    </div>
  );
};

export default UserProfile;
