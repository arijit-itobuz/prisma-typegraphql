import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class UserSignupArgs {
  @Field(() => String, {nullable: false})
  firstName!: string;

  @Field(() => String, {nullable: false})
  lastName!: string;

  @Field(() => String, {nullable: false})
  email!: string;

  @Field(() => String, {nullable: false})
  password!: string;
}
