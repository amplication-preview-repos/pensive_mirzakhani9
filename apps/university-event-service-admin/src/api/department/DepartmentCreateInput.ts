import { UserCreateNestedManyWithoutDepartmentsInput } from "./UserCreateNestedManyWithoutDepartmentsInput";
import { CollegeWhereUniqueInput } from "../college/CollegeWhereUniqueInput";

export type DepartmentCreateInput = {
  users?: UserCreateNestedManyWithoutDepartmentsInput;
  name?: string | null;
  college?: CollegeWhereUniqueInput | null;
};
