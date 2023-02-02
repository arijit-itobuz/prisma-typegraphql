import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RoleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RoleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  roleSlug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  deletedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
