import { UserUpdateManyWithoutCollegesInput } from "./UserUpdateManyWithoutCollegesInput";
import { DepartmentUpdateManyWithoutCollegesInput } from "./DepartmentUpdateManyWithoutCollegesInput";

export type CollegeUpdateInput = {
  users?: UserUpdateManyWithoutCollegesInput;
  name?: string | null;
  departments?: DepartmentUpdateManyWithoutCollegesInput;
};
