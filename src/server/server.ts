import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import { buildSchema } from 'type-graphql';
import { context } from '../../prisma/context';
import { resolvers } from '../graphql/resolver/resolvers';
import { serverContext } from '../utils/serverContext';
import { config } from '../config/config';

async function server() {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = await buildSchema({
    resolvers: resolvers(),
    validate: true,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  app.use(
    '/graphql',
    express.json(),
    expressMiddleware(server, {
      context: ({ req }) => serverContext({ req }),
    })
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: config.APP.PORT }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:${config.APP.PORT}/graphql`);
}

server().catch(async (error) => {
  console.log('🚀 server error', error);
  await context.prisma.$disconnect();
});
