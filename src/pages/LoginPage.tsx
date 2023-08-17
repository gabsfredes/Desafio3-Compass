import Login from "../components/Login/Login";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <>
      <div className={fadeIn ? "fade-in active" : "fade-in"}>
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
