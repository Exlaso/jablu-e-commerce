import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(process.env.Hasura_URL!, { fetch });
