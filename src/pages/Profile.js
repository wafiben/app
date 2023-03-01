import React from "react";
import { useEffect } from "react";
import axios from "axios";

function Profile() {
  useEffect(() => {
    axios.get("http://localhost:4000/user").then((data) => {
      console.log(data);
    });
  }, []);
  return <div>Profile</div>;
}

export default Profile;
