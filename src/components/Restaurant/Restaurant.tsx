import classes from "./Restaurant.module.css";
import { getRestaurant, AboutRestaurant } from "./Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../images/star_icon.svg";
import couponIcon from "../../images/coupon.svg";

const Restaurant: React.FC = () => {
  const imageRandom = Math.floor(Math.random() * 4) + 1; // so pra aleatorizar a imagem, já que não foi hospedada na api
  const imageSrc = `https://source.unsplash.com/400x266/?food,00${imageRandom}`;
  const { id } = useParams<{ id: string }>();
  const [restaurantData, setRestaurantData] = useState<AboutRestaurant | null>(
    null
  );

  async function fetchRestaurantData() {
    try {
      const data: AboutRestaurant = await getRestaurant(id);
      setRestaurantData(data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return (
    <>
      <section id={classes.restaurant}>
        <div className={classes.restaurant_header}>
          <img src={imageSrc} className={classes.image} alt="restaurant" />
          <div className={classes.about}>
            {restaurantData ? (
              <span className={classes.name}>{restaurantData.name}</span>
            ) : (
              <span className={classes.name}>Loading...</span>
            )}
            <span className={classes.location}>
            {restaurantData ? (
                <span className={classes.divisor}>
                  {restaurantData.location}
                </span>
              ) : (
                <span className={classes.divisor}>...</span>
              )}
            </span>
            <div className={classes.others}>
            {restaurantData ? (
                <span className={classes.divisor}>
                  <img src={starIcon} alt="star" /> 
                  {restaurantData.rating}
                  <br></br>
                  100+ ratings
                </span>
              ) : (
                <span className={classes.divisor}>...</span>
              )}

              {restaurantData ? (
                <span className={classes.divisor}>
                  {restaurantData.deliveryTime}
                  <br></br>
                  Delivery Time
                </span>
              ) : (
                <span className={classes.divisor}>...</span>
              )}

              
            </div>
          </div>
          <div className={classes.coupon}>
            <span className={classes.title}>Offers</span>
            <span className={classes.info}>
              <img src={couponIcon} alt="coupon" />
              50% off up to ₹100 | Use code TRYNEW
            </span>
            <span className={classes.info}>
              <img src={couponIcon} alt="coupon" />
              20% off | Use code PARTY
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
