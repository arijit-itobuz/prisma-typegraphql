import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { context } from '../../prisma/context';
import { resolvers } from '../graphql/resolver/resolvers';
import { serverContext } from '../utils/serverContext';

async function server() {
  const schema = await buildSchema({
    resolvers: resolvers(),
    validate: true,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => serverContext({ req }),
  });

  const app = express();
  const port = 3001;

  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`🚀 server is running at: http://localhost:${port}/graphql`);
  });
}

server().catch(async (error) => {
  console.log('🚀 server error', error);
  await context.prisma.$disconnect();
});
