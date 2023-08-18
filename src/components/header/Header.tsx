import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import Bag from "../Bag/Bag";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../cookieUtils";
import LogoutModal from "../Login/ModalLogout";
import { useState } from "react";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const isRegisterRoute = location.pathname === "/register";
  const isLoginRoute = location.pathname === "/login";
  const sessionToken = getCookie("sessionToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogoutConfirm = () => {
    deleteCookie("sessionToken");
    setIsModalOpen(false);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <header>
      <Link to="/">
        <div className={classes.logo}>
          <img src={logo} alt="FitMe Logo" />
          <p>FitMe</p>
        </div>
      </Link>
      {!isRegisterRoute && !isLoginRoute && (
        <div className={classes.menu}>
          <div className={classes.search_bar}>
            <SearchBar />
          </div>
          <Bag />

          {(!sessionToken && (
            <Link to="/login">
              <button className="btn sign">Sign In</button>
            </Link>
          )) || (
            <button className="btn sign" onClick={handleLogout}>
              Sign Out
            </button>
          )}
        </div>
      )}

      <LogoutModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onConfirm={handleLogoutConfirm}
      />
    </header>
  );
};

export default Header;
