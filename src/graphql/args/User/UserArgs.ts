import { ArgsType, Field } from 'type-graphql';
import { Length, IsEmail } from 'class-validator';

@ArgsType()
export class UserSignupArgs {
  @Field(() => String, {nullable: false})
  @Length(1, 254)
  firstName!: string;

  @Field(() => String, {nullable: false})
  @Length(1, 254)
  lastName!: string;

  @Field(() => String, {nullable: false})
  @IsEmail()
  @Length(1, 254)
  email!: string;

  @Field(() => String, {nullable: false})
  @Length(8, 20)
  password!: string;
}

@ArgsType()
export class UserLoginArgs {
  @Field(() => String, {nullable: false})
  @IsEmail()
  @Length(1, 254)
  email!: string;

  @Field(() => String, {nullable: false})
  @Length(8, 20)
  password!: string;
}
