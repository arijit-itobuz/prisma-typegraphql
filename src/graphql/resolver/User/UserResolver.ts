import { Args, Mutation, Resolver } from 'type-graphql';
import { UserService } from '../../service/User/UserService';
import { UserSignupArgs } from '../../args/User/UserArgs';
import { User } from '../../../../prisma/generated/type-graphql';
@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async userSignup(@Args({validate: false}) args: UserSignupArgs) {
    const service = new UserService();
    return service.userSignup(args);
  }
}
