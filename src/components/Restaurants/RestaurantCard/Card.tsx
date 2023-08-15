import classes from "./Card.module.css";

const Card: React.FC = () => {
  return (
    <>
      <div className={classes.card}>
        {/* <img src={img} alt="dish" /> */}
        <span className={classes.card_titl}>TITLE</span>
        <div className={classes.card_about}>
          <span className={classes.card_cat}>CATEGORY</span>
          <span className={classes.card_stars_delivery}>
            {/* <img src={img2} alt="star" /> */}
            STARS
          </span>
        </div>
        <span className={classes.card_stars_delivery}>
            {/* <img src={img3} alt="star" /> */}
            TIME
          </span>
      </div>
    </>
  );
};

export default Card;
