import classes from "./Card.module.css";
import starIcon from "../../../images/star_icon.svg";
import badStarIcon from "../../../images/low_star_icon.svg";
import timeIcon from "../../../images/delivery_icon.svg";
import locationIcon from "../../../images/location_icon.svg";
import { Link } from "react-router-dom";

interface CardProps {
  link: string;
  name: string;
  rating: number;
  deliveryTime: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  name,
  rating,
  deliveryTime,
  link,
  location,
}) => {
  const imageRandom = Math.floor(Math.random() * 4) + 1; // so pra aleatorizar a imagem, já que não foi hospedada na api
  const imageSrc = `https://source.unsplash.com/256x256/?food,00${imageRandom}`;

  return (
    <>
      <div className={classes.card}>
        <img src={imageSrc} className={classes.card_image} alt="dish" />
        <Link to={`/restaurant/${link}`} className={classes.link}>
          <span className={classes.card_title}>{name}</span>
        </Link>
        <div className={classes.card_about}>
          <span className={classes.card_location}>
            <img src={locationIcon} alt="location" />
            {location}
          </span>
          <span className={classes.card_stars_delivery}>
            {rating >= 4.5 ? (
              <img src={starIcon} alt="rating" />
            ) : (
              <img src={badStarIcon} alt="rating" />
            )}
            {rating}
          </span>
        </div>
        <span className={classes.card_stars_delivery}>
          <img src={timeIcon} alt="delivery time" />
          {deliveryTime}
        </span>
      </div>
    </>
  );
};

export default Card;
