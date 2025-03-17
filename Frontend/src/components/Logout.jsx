import React from "react";
import toast from "react-hot-toast";

function Logout({ setAuthUser }) {
  const handleLogout = () => {
    try {
      setAuthUser(null); // Set authUser to null
      localStorage.removeItem("Users");
      toast.success("Logout Successfully!");
      window.location.reload();
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
