import axios, { AxiosResponse } from 'axios';

const API_URL = "https://parseapi.back4app.com/graphql";
const APPLICATION_ID = "lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh";
const REST_API_KEY = "8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08";

export interface Restaurant {
  objectId: string;
  link: string;
  name: string;
  rating: number; 
  deliveryTime: string;
  location: string;
}

const graphqlQuery = `
    query {
    restaurants {
        edges {
            node {
                objectId
                name
                rating
                deliveryTime
                location
            }
        }
        }
    }
    `;

export async function fetchRestaurants(): Promise<any[]> {
  try {
    const response: AxiosResponse = await axios.post(
      API_URL,
      { query: graphqlQuery },
      {
        headers: {
          "X-Parse-Application-Id": APPLICATION_ID,
          "X-Parse-REST-API-Key": REST_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    // resultado da query
    const restaurants = response.data.data.restaurants.edges.map((edge: any) => edge.node);
    return restaurants;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
}
