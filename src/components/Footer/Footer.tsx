import classes from "./Footer.module.css";
import logo from "../../images/logo_white.svg";
import facebook_icon from "../../images/facebook_icon.svg";
import instagram_icon from "../../images/instagram_icon.svg";
import twitter_icon from "../../images/twitter_icon.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={classes.content}>
        <Link to="/">
          <div className={classes.logo}>
            <img src={logo} alt="FitMe Logo" />
            <p>FitMe</p>
          </div>
        </Link>
        <div className={classes.links}>
          <Link to="/about">About</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/help">Help & Support</Link>
          <Link to="/tec">T&C</Link>
        </div>
        <div className={classes.contact}>
          <div className={classes.contact_txt}>Contact:</div>
          <div className={classes.contact_number}>+91 1234567899</div>
        </div>
      </div>
      <div className={classes.social_media}>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook_icon} className={classes.social_media_img} alt="Facebook Icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagram_icon} className={classes.social_media_img} alt="Instagram Icon" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitter_icon} className={classes.social_media_img} alt="Twitter Icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
