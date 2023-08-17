import axios, { AxiosResponse } from "axios";
import apiConfig from "../apiConfig";

const graphqlQuery = `
query IntrospectionQuery {
  __schema {
    types {
      name
      description
      kind
      fields {
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
    `;

export async function fgetSchemas(): Promise<any[]> {
  try {
    const response: AxiosResponse = await axios.post(
      apiConfig.baseUrl,
      { query: graphqlQuery },
      { headers: apiConfig.headers }
    );

    // resultado da query
    const schemas = response.data;
    return schemas;
  } catch (error) {
    console.error("Error fetching schemas:", error);
    throw error;
  }
}

export async function mutationLogin(values: any): Promise<any[]> {
  const loginMutation = `
  mutation LogIn{
    logIn(input: {
      username: "Gabriel F"
      password: "123456"
    }){
      viewer{
        user{
          id
          createdAt
          updatedAt
          username
        }
        sessionToken
      }
    }
  }
  `;
  try {
    const response: AxiosResponse = await axios.post(
      apiConfig.baseUrl,
      {
        query: loginMutation,
        variables: values,
      },
      { headers: apiConfig.headers }
    );

    // resultado da query
    console.log('logged in');;
    return response.data.data.logIn.viewer.sessionToken;
  } catch (error) {
    console.error("Error login:", error);
    throw error;
  }
}
