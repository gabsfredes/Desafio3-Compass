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

  // const getColumnCount = (): number => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth <= 480) {
  //     return 1;
  //   } else if (screenWidth <= 768) {
  //     return 2;
  //   } else if (screenWidth <= 1024) {
  //     return 3;
  //   } else {
  //     return 4;
  //   }
  // };

  return (
    <>
      <section id={classes.restaurants}>
        <div className={classes.title}>Restaurants</div>
        <div className={classes.restaurants_display}>
        {/* <div
          className={classes.restaurants_display}
          style={{ gridTemplateColumns: `repeat(${getColumnCount()}, 1fr)` }}
        > */}
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
