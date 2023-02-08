import { GraphQLError } from 'graphql';
import { context } from '../../../../prisma/context';
import { UserLoginArgs, UserSignupArgs } from '../../args/User/UserArgs';
import { userDecryption, userEncryption } from '../../../utils/userCryptography';

export class UserService {
  async userSignup(args: UserSignupArgs) {
    const { firstName, lastName, email } = args;
    const password = await userEncryption(args.password);
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

  async userLogin(args: UserLoginArgs) {
    const { email, password } = args;

    try {
      const user = await context.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) throw new GraphQLError('Failed to get user');

      const passwordCheck = await userDecryption(password, user.password);

      if (!passwordCheck) throw new GraphQLError('Invalid user credentials');

      return user;
    } catch (error) {
      throw error;
    }
  }
}
