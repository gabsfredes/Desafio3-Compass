import axios, { AxiosResponse } from "axios";
import apiConfig from "../apiConfig";

export async function mutationNewUser(values: any): Promise<any[]> {
  const newUserMutation = `
  mutation SignUp($fullname: String!, $username: String!, $email: String!, $password: String!){
    signUp(input: {
      fields: {
        username: $username
        password: $password
        email: $email
        fullname: $fullname
      }
    }){
      viewer{
        user{
          id
          createdAt
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
        query: newUserMutation,
        variables: {
          fullname: values.fullname,
          username: values.username,
          email: values.email,
          password: values.password,
        },
      },

      { headers: apiConfig.headers }
    );

    // cria user
    const user = response.data.data.signUp.viewer.user;
    return user;
  } catch (error) {
    console.error("Error fetching schemas:", error);
    throw error;
  }
}

export async function checkUser(values: any): Promise<any[]> {
  const checkUser = `
  query GetUserByUsername($username: String!) {
  users(where: { username: { equalTo: $username } }) {
    edges {
      node {
        id
        username
      }
    }
  }
}
  `;
  try {
    const response: AxiosResponse = await axios.post(
      apiConfig.baseUrl,
      {
        query: checkUser,
        variables: {
          username: values.username,
        },
      },

      { headers: apiConfig.headers }
    );

    // retorna se existe ou não
    const user = response.data.data.users.edges;
    return user;
  } catch (error) {
    console.error("Error fetching schemas:", error);
    throw error;
  }
}

export async function checkEmail(values: any): Promise<any[]> {
  const checkEmail = `
  query GetUserByEmail($email: String!) {
  users(where: { email: { equalTo: $email } }) {
    edges {
      node {
        id
        email
      }
    }
  }
}
  `;
  try {
    const response: AxiosResponse = await axios.post(
      apiConfig.baseUrl,
      {
        query: checkEmail,
        variables: {
          email: values.email,
        },
      },

      { headers: apiConfig.headers }
    );

    // retorna se existe ou não
    const user = response.data.data.users.edges;
    return user;
  } catch (error) {
    console.error("Error fetching schemas:", error);
    throw error;
  }
}
