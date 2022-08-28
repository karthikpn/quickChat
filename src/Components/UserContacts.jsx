import React, { useState } from "react";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "../views/userContacts.css";
import { useSelector, useDispatch } from "react-redux";
import contacts from "../Chats/contacts";
import Taskbar from "./Taskbar";

const UserContacts = () => {
  const [showActiveConvo, setShowActiveConvo] = useState(false);
  const [showArchiveConvo, setShowArchiveConvo] = useState(false);
  const [showtaskbar, setShowtaskbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedA, setSelectedA] = useState(0);
  const dispatch = useDispatch();
  const activeContact = useSelector((state) => state);
  const handleMobile = () => {
    setShowtaskbar(!showtaskbar);
  };
  const toggleConvo = (e) => {
    e.preventDefault();

    setShowActiveConvo(!showActiveConvo);
  };

  const toggleArchive = (e) => {
    e.preventDefault();

    setShowArchiveConvo(!showArchiveConvo);
  };

  function changeActiveConvo(contact) {
    dispatch({ type: "ChangeActiveConvo", payload: contact });
  }

  function changeArchiveConvo(contact) {
    setSelectedA(contact.id);
  }

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="userContacts">
        {showMenu ? (
          <>
            <div className="showmenu"></div>
            <div className="showmenu__menu">
              <h1>User Details :</h1>
              <h2>Name : Karthik PN</h2>
              <h3>mail : karpn98@gmail.com</h3>
              <p
                style={{
                  padding: "10px",
                  backgroundColor: "var(--secondary)",

                  borderRadius: "10px",
                }}
              >
                Hurray!. Its been an year you joined. Happy Aniversary
              </p>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#0f4cff",
                  color: "white",
                  borderRadius: "10px",
                  border: "none",
                  outline: "none",
                }}
                onClick={handleMenu}
              >
                Go Back
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="userContacts_full">
          <div className="userContacts__brand">
            <img
              style={{ height: "40px", width: "40px", marginRight: "1vw" }}
              src="/images/quickChat.png"
            />
            <brand className="userContacts__brand__name">QuickChat</brand>
          </div>

          <div className="userContacts_user">
            <img
              src="/images/avatar.png"
              alt="Avatar"
              class="avatar"
              style={{ margin: "1vh 0" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  ontSize: "1rem",
                  color: "var(--textPrimary)",
                  fontWeight: "bold",
                  margin: "1vh 0.7vw",
                }}
              >
                Karthik PN
              </p>

              <p
                style={{
                  ontSize: "1rem",
                  color: "var(--textPrimary)",
                  fontWeight: "bold",
                }}
                onClick={handleMenu}
              >
                <AiFillSetting />
              </p>
            </div>

            <p
              style={{
                fontSize: "0.7rem",
                color: "var(--textSecondary)",
                margin: "0 0 1vh 0",
              }}
            >
              Lead UI/UX designer
            </p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="userContacts_contacts">
            <div style={{ margin: "2vh 0" }}>
              <button
                className="userContacts_contacts__button"
                onClick={toggleConvo}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    Active Conversation{" "}
                    <span
                      style={{
                        marginLeft: "1vw",
                        fontSize: "0.7rem",
                        padding: "3px 5px",
                        borderRadius: "50%",
                        backgroundColor: "lightgray",
                      }}
                    >
                      {contacts.length}
                    </span>
                  </p>
                  <p>
                    {showActiveConvo ? (
                      <MdOutlineArrowDropUp />
                    ) : (
                      <MdOutlineArrowDropDown />
                    )}
                  </p>
                </div>
              </button>
              {showActiveConvo ? (
                <div>
                  {contacts.map((contact) => {
                    return (
                      <div
                        onClick={changeActiveConvo.bind(this, contact)}
                        className={`userContacts_contacts__contact ${
                          activeContact.id == contact.id
                            ? "selected"
                            : "unselected"
                        }`}
                      >
                        <img
                          src="/images/avatar.png"
                          alt="Avatar"
                          class="avatar"
                          style={{
                            height: "30px",
                            width: "30px",
                            marginRight: "1vw",
                          }}
                        />
                        <p style={{ fontSize: "0.9rem" }}>{contact.name}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div style={{ margin: "2vh 0" }}>
              <button
                className="userContacts_contacts__button"
                onClick={toggleArchive}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    Archived Conversation{" "}
                    <span
                      style={{
                        marginLeft: "1vw",
                        fontSize: "0.7rem",
                        padding: "3px 5px",
                        borderRadius: "50%",
                        backgroundColor: "lightgray",
                      }}
                    >
                      {contacts.length}
                    </span>
                  </p>
                  <p>
                    {showArchiveConvo ? (
                      <MdOutlineArrowDropUp />
                    ) : (
                      <MdOutlineArrowDropDown />
                    )}
                  </p>
                </div>
              </button>
              {showArchiveConvo ? (
                <div>
                  {contacts.map((contact) => {
                    return (
                      <div
                        onClick={changeArchiveConvo.bind(this, contact)}
                        className={`userContacts_contacts__contact ${
                          selectedA == contact.id ? "selected" : "unselected"
                        }`}
                      >
                        <img
                          src="/images/avatar.png"
                          alt="Avatar"
                          class="avatar"
                          style={{
                            height: "30px",
                            width: "30px",
                            marginRight: "1vw",
                          }}
                        />
                        <p style={{ fontSize: "0.9rem" }}>{contact.name}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="userContacts_mobile">
        <p style={{ cursor: "pointer", zIndex: "100" }} onClick={handleMobile}>
          <GiHamburgerMenu />
        </p>
        {showtaskbar ? (
          <div className="taskbar">
            <p
              style={{
                cursor: "pointer",

                position: "absolute",
                top: "1vh",
                left: "0.5vh",
              }}
              onClick={handleMobile}
            >
              <GiHamburgerMenu />
            </p>
            <Taskbar />{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UserContacts;
