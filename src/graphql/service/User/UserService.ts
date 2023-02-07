import { GraphQLError } from 'graphql';
import { context } from '../../../../prisma/context';
import { UserSignupArgs } from '../../args/User/UserArgs';

export class UserService {
  async userSignup(args: UserSignupArgs) {
    const { firstName, lastName, email, password } = args;
    try {
      return await context.prisma.user.create({
        data: {
          firstName,
          lastName,
          fullName: `${firstName} ${lastName}`,
          email,
          password,
        },
      });
    } catch (error) {
      throw new GraphQLError('Failed to create user');
    }
  }
}
