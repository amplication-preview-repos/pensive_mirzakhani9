import { UserUpdateManyWithoutDepartmentsInput } from "./UserUpdateManyWithoutDepartmentsInput";
import { CollegeWhereUniqueInput } from "../college/CollegeWhereUniqueInput";

export type DepartmentUpdateInput = {
  users?: UserUpdateManyWithoutDepartmentsInput;
  name?: string | null;
  college?: CollegeWhereUniqueInput | null;
};
