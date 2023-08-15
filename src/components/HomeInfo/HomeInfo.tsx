import classes from "./HomeInfo.module.css";
import solidBg from "../../images/home_solid.svg";
import bananaIcon from "../../images/banana.svg";
import appleIcon from "../../images/apple.svg";
import dishesHomeImg from "../../images/dishes_home.svg";

const HomeInfo: React.FC = () => {
  const rootStyles = getComputedStyle(document.documentElement);

  const bananaBg = {
    backgroundColor: rootStyles.getPropertyValue("--light-orange"),
  };

  const appleBg = {
    backgroundColor: rootStyles.getPropertyValue("--light-red"),
  };

  return (
    <>
      <section id={classes.homepage}>
        <img src={solidBg} className={classes.dishes_image} alt="Home Solid Bg" />
        <div className={classes.homepage_text}>
          <span>
            Premium <span className={classes.orange}>quality</span>
          </span>
          <span className={classes.home_text_icons}>
            Food for your
            <span className={classes.home_fruits} style={bananaBg}>
              <img src={bananaIcon} className={classes.inside_home_fruits} alt="Banana Icon" />
            </span>
            <span className={classes.orange}>healthy</span>
          </span>
          <span className={classes.home_text_icons}>
            <span className={classes.home_fruits} style={appleBg}>
              <img src={appleIcon} className={classes.inside_home_fruits} alt="Apple Icon" />
            </span>
            <span className={classes.orange}>& Daily Life</span>
          </span>
          <div className={classes.home_about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <img src={dishesHomeImg} className={classes.dishes_image} alt="Dishes Home Img" />
      </section>
    </>
  );
};

export default HomeInfo;
