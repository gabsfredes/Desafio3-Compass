import { useEffect, useState } from "react";
import Restaurant from "../components/Restaurant/Restaurant";

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
        <Restaurant />
      </div>
    </>
  );
};

export default RegisterPage;
