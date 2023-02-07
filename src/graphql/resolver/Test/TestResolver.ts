import { Arg, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class TestResolver {
  @Query(() => String, { name: 'TestResolverName', nullable: true, description: 'desc' })
  async queryTest() {
    return 'TestResolver';
  }

  @Mutation(() => String)
  async mutationTest(@Arg('arg') arg: string) {
    return arg;
  }
}
