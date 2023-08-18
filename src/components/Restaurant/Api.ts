import axios, { AxiosResponse } from "axios";
import apiConfig from "../apiConfig";

interface Dish {
  name: string;
  description: string;
  price: number;
}


export interface AboutRestaurant {
    name: string;
    location: string;
    rating: number;
    deliveryTime: number;
    topDishes: Dish[];
}

export async function getRestaurant(id: any): Promise<AboutRestaurant> {
  const getRestaurant = `
  query getRestaurant($id: ID!) {
    fitMe(id: $id) {
    name
    location
    rating
    deliveryTime
    topDishes {
        ... AllDishes
    }
    }   
}

  fragment AllDishes on Dish {  
    name
    description
    price
  }
  `;
  try {
    const response: AxiosResponse = await axios.post(
      apiConfig.baseUrl,
      {
        query: getRestaurant,
        variables: {
          id,
        },
      },

      { headers: apiConfig.headers }
    );

    // retorna se existe ou não
    const restaurant = response.data.data.fitMe;
    return restaurant;
  } catch (error) {
    console.error("Error fetching schemas:", error);
    throw error;
  }
}
