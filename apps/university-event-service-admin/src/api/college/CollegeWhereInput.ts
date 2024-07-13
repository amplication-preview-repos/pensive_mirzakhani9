import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentListRelationFilter } from "../department/DepartmentListRelationFilter";

export type CollegeWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
  name?: StringNullableFilter;
  departments?: DepartmentListRelationFilter;
};
