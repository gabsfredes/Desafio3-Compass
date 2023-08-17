import axios, { AxiosResponse } from 'axios';
import apiConfig from '../apiConfig';

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
      fitMes {
        edges{
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
      apiConfig.baseUrl,
      { query: graphqlQuery },
      { headers: apiConfig.headers }
    );

    // resultado da query
    const restaurants = response.data.data.fitMes.edges.map((edge: any) => edge.node);
    return restaurants;
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    throw error;
  }
}
