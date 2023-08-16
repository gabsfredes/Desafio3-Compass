import Card from "./RestaurantCard/Card";
import classes from "./Restaurants.module.css";
import { fetchRestaurants, Restaurant } from "./FromApi";
import React, { useEffect, useState } from "react";

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetchRestaurants()
      .then((fetchedRestaurants) => {
        setRestaurants(fetchedRestaurants);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(restaurants);
  return (
    <>
      <section id={classes.restaurants}>
        <div className={classes.title}>Restaurants</div>
        <div className={classes.restaurants_display}>
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
                <Card
                  key={restaurant.objectId}
                  link={restaurant.objectId}
                  name={restaurant.name}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                  location={restaurant.location}
                />
            ))
          ) : (
            <p>No restaurants available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Restaurants;
