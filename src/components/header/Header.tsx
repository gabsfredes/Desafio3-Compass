import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import Bag from "../Bag/Bag";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isRegisterRoute = location.pathname === "/register";
  const isLoginRoute = location.pathname === "/login";

  return (
    <header>
      <Link to="/">
        <div className={classes.logo}>
          <img src={logo} alt="FitMe Logo" />
          <p>FitMe</p>
        </div>
      </Link>
      {!isRegisterRoute && (
        <div className={classes.menu}>
          <div className={classes.search_bar}>
            <SearchBar />
          </div>
          <Bag />
          <Link to="/login">
            <button className="btn sign">Sign In</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
