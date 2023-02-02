import * as TypeGraphQL from "type-graphql";

export enum RoleScalarFieldEnum {
  id = "id",
  name = "name",
  roleSlug = "roleSlug",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt"
}
TypeGraphQL.registerEnumType(RoleScalarFieldEnum, {
  name: "RoleScalarFieldEnum",
  description: undefined,
});
