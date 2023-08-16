import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import "../App.css";

const Root: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <>
      <div className={fadeIn ? 'fade-in active' : 'fade-in'}>
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
