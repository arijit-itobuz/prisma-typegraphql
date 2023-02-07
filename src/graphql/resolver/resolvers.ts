import { NonEmptyArray } from 'type-graphql';
import { TestResolver } from './Test/TestResolver';
import { UserResolver } from './User/UserResolver';

export function resolvers(): NonEmptyArray<Function> {
  return [TestResolver, UserResolver];
}
