import { useContext, useState } from "react";
import ProfileContext from "../contexts/ProfileContext";

function Profile() {
  const [updatedUsername, setUpdatedUsername] = useState("");
  const profileContextValues = useContext(ProfileContext);
  return (
    <div style={{ marginTop: 30 }}>
      <input
        type="text"
        placeholder="username"
        value={updatedUsername}
        onChange={(e) => {
          setUpdatedUsername(e.target.value);
        }}
      />
      <button
        onClick={() => {
          profileContextValues.setUsername(updatedUsername);
        }}
      >
        Update Username
      </button>
    </div>
  );
}
export default Profile;
