import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema, Query, Resolver } from 'type-graphql';
import { context } from '../context';

/* dummy */
@Resolver()
class DummyResolver {
  @Query(() => String, { name: 'dummyName', nullable: true, description: 'desc' })
  async dummy() {
    return 'dummy';
  }
}
/* dummy */

async function server() {
  const schema = await buildSchema({
    resolvers: [DummyResolver],
  });

  const server = new ApolloServer({ schema });

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
