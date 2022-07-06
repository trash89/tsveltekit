import { GraphQLClient } from "graphql-request";

const ENDPOINT = "https://journalgraphqlserver.herokuapp.com/";

export const client = new GraphQLClient(ENDPOINT);
