import classes from "./Header.module.css";
import logo from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import Bag from "../Bag/Bag";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <div className={classes.logo}>
          <img src={logo} alt="FitMe Logo" />
          <p>FitMe</p>
        </div>
      </Link>
      <div className={classes.menu}>
        <div className={classes.search_bar}>
          <SearchBar />
        </div>
        <Bag />
        <Link to="/login">
          <button className="btn sign">Sign In</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
