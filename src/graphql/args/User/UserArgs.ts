import { ArgsType, Field } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';

@ArgsType()
export class UserSignupArgs {
  @Field(() => String, {nullable: false})
  @Length(1, 255)
  firstName!: string;

  @Field(() => String, {nullable: false})
  @Length(1, 255)
  lastName!: string;

  @Field(() => String, {nullable: false})
  @IsEmail()
  email!: string;

  @Field(() => String, {nullable: false})
  @Length(8, 20)
  password!: string;
}
