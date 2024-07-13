import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CollegeWhereUniqueInput } from "../college/CollegeWhereUniqueInput";

export type DepartmentWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
  name?: StringNullableFilter;
  college?: CollegeWhereUniqueInput;
};
