import { TestResolver } from './test/TestResolver';
import { NonEmptyArray } from 'type-graphql';

export function resolvers(): NonEmptyArray<Function> {
  return [TestResolver];
}
