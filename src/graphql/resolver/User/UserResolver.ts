import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { UserService } from '../../service/User/UserService';
import { UserLoginArgs, UserSignupArgs } from '../../args/User/UserArgs';
import { User } from '../../../../prisma/generated/type-graphql';
@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async userSignup(@Args() args: UserSignupArgs) {
    const service = new UserService();
    return service.userSignup(args);
  }

  @Query(() => User)
  async userLogin(@Args() args: UserLoginArgs) {
    const service = new UserService();
    return service.userLogin(args);
  }
}
