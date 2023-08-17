import axios, { AxiosResponse } from 'axios';
import apiConfig from '../apiConfig';

const graphqlQuery = `
query ListQueries {
    __schema {
      queryType {
        fields {
          name
          description
          args {
            name
            description
            type {
              name
              kind
            }
          }
        }
      }
    }
  }
    `;

export async function fgetSchemas(): Promise<any[]> {
    try {
        const response: AxiosResponse = await axios.post(
        apiConfig.baseUrl,
        { query: graphqlQuery },
        { headers: apiConfig.headers }
        );
    
        // resultado da query
        const schemas = response.data.data.__schema.queryType.fields.map((edge: any) => edge);
        return schemas;
    } catch (error) {
        console.error("Error fetching schemas:", error);
        throw error;
  }
}