import { TestResolver } from './Test/TestResolver';
import { NonEmptyArray } from 'type-graphql';

export function resolvers(): NonEmptyArray<Function> {
  return [TestResolver];
}
