import React from "react";
import "./views/App.css";
import UserProfile from "./Components/UserProfile";
import Chat from "./Components/Chat";
import UserContacts from "./Components/UserContacts";
function App() {
  return (
    <div className="App ">
      <UserContacts />
      <Chat />
      <UserProfile />
    </div>
  );
}

export default App;
