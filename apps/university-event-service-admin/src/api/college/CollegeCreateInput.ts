import { UserCreateNestedManyWithoutCollegesInput } from "./UserCreateNestedManyWithoutCollegesInput";
import { DepartmentCreateNestedManyWithoutCollegesInput } from "./DepartmentCreateNestedManyWithoutCollegesInput";

export type CollegeCreateInput = {
  users?: UserCreateNestedManyWithoutCollegesInput;
  name?: string | null;
  departments?: DepartmentCreateNestedManyWithoutCollegesInput;
};
