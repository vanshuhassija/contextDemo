import { useState } from "react";
import ProfileContext from "../contexts/ProfileContext";
import Page from "./Page";
import TopNav from "./TopNav";

function MainContent() {
  const [username, setUsername] = useState("Vanshu");

  //Consumers should be wrapped in ContextProvider
  return (
    <ProfileContext.Provider
      value={{
        username: username,
        setUsername: setUsername
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <TopNav />
        <Page />
      </div>
    </ProfileContext.Provider>
  );
}

export default MainContent;
