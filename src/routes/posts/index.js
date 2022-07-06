import { client } from "$lib/graphql-client";
import { GraphQLClient, gql } from "graphql-request";

export const get = async () => {
  try {
    const LOGIN_MUTATION = gql`
      mutation LoginMutation($Username: String!, $Password: String!) {
        login(Username: $Username, Password: $Password) {
          token
          profile {
            idProfile
            Username
          }
        }
      }
    `;
    const variables = {
      Username: "demo",
      Password: "secret",
    };
    const { login } = await client.request(LOGIN_MUTATION, variables);
    return {
      status: 200,
      body: { token: login.token, profile: login.profile },
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: error.message },
    };
  }
};
