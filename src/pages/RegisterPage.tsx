import Register from "../components/Register/Register";
import { useEffect, useState } from "react";

const RegisterPage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <>
      <div className={fadeIn ? "fade-in active" : "fade-in"}>
        <Register />
      </div>
    </>
  );
};

export default RegisterPage;
