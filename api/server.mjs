import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.mjs";
import { resolvers } from "./resolvers.mjs";
import { models } from "./db/index.mjs";
import { db } from "./db/db.mjs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    const user = db.data.user;
    return { models, db, user };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
