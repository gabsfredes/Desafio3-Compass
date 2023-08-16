import React, { useState, useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../App.css";

const ErrorPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <>
      <div className={fadeIn ? "fade-in active" : "fade-in"}>
        <ScrollToTop />
        <Header />
        <Error />
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
