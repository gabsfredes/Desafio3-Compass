import axios, { AxiosResponse } from "axios";
import apiConfig from "../apiConfig";

export async function mutationLogin(values: any): Promise<any[]> {
  const loginMutation = `
  mutation LogIn($username: String!, $password: String!){
    logIn(input: {
      username: $username
      password: $password
    }){
      viewer{
        user{
          id
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

    if (response.data.errors) {
      return response.data.errors;
    } else {

    return response.data.data.logIn.viewer.sessionToken;
    }
  } catch (error) {
    console.error("Error login:", error);
    throw error;
  }
}
