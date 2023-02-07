import { Query, Resolver } from 'type-graphql';

@Resolver()
export class TestResolver {
  @Query(() => String, { name: 'TestResolverName', nullable: true, description: 'desc' })
  async test() {
    return 'TestResolver';
  }
}
