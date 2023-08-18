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

export async function mutationNewUser(values: any): Promise<any[]> {
  const newUserMutation = `
  mutation SignUp ($username: String!, $password: String!){
    signUp(input: {
      fields: {
        username: $username
        password: $password
      }
    })
      viewer{
        user{
          id
          createdAt
        }
        sessionToken
    }
  }
  `;
  try {
    const response: AxiosResponse = await axios.post(
      apiConfig.baseUrl,
      { query: newUserMutation,
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        },  
      },
      
      { headers: apiConfig.headers }
    );

    // cria user
    const user = response.data.data.signUp.viewer.user;
    console.log("Criado:" + user);
    return user;
  } catch (error) {
    console.error("Error fetching schemas:", error);
    throw error;
  }
}
