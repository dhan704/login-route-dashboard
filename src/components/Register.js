import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  return (
    <div>
      <Header />
      Register
    </div>
  );
}

export default Register;