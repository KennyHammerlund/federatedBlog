import { ApolloServer } from "apollo-server";
import _ from "lodash";

// Needed to create a federationready schema.
import { buildFederatedSchema } from "@apollo/federation";
import gql from "graphql-tag";
import * as resolvers from "./graphs/resolvers";
import { mergeTypes } from "merge-graphql-schemas";
import typeDefs from "./graphs/schema";

// use of graphql-tag/loader in webpack + merge-graphjql-schemas tocreated a typedef
// ready to use in federated schema
const mergedDefs = gql`
  ${mergeTypes(typeDefs)}
`;

const test = _.reduce(resolvers, (prev, next) => _.merge(prev, next));

const PORT = process.env.PORT || 2990;
const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: mergedDefs,
      resolvers: test
    }
  ]),
  playground: true
});

// Start accepting connections.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Blog server running on port ${url}`);
});
