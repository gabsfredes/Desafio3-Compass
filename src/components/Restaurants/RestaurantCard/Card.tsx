import classes from "./Card.module.css";
import { Restaurant } from "../FromApi";
import starIcon from "../../../images/star_icon.svg";
import timeIcon from "../../../images/delivery_icon.svg";
import { Link } from "react-router-dom";

interface CardProps {
  link: string;
  name: string;
  rating: number;
  deliveryTime: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ name, rating, deliveryTime, link }) => {
  const imageRandom = Math.floor(Math.random() * 4) + 1; // so pra aleatorizar a imagem, já que não foi hospedada na api
  const imageSrc = `https://source.unsplash.com/256x256/?food,00${imageRandom}`;

  return (
    <>
      <div className={classes.card}>
        <img src={imageSrc} alt="dish" />
        <Link to={`/restaurants/${link}`} className={classes.link}>
          <span className={classes.card_title}>{name}</span>
        </Link>
        <div className={classes.card_about}>
          <span className={classes.card_cat}>something</span>
          <span className={classes.card_stars_delivery}>
            <img src={starIcon} alt="stars" />
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
