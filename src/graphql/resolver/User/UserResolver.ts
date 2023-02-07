import { Args, Mutation, Resolver } from 'type-graphql';
import { UserSignupArgs } from '../../args/User/UserArgs';

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async userSignup(@Args() args: UserSignupArgs) {
    return args;
  }
}
