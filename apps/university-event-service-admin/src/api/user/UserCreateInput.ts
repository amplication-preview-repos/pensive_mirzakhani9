import { InputJsonValue } from "../../types";
import { CollegeWhereUniqueInput } from "../college/CollegeWhereUniqueInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  onCampus?: boolean | null;
  hostelOfResidence?: string | null;
  userName?: string | null;
  role?: "Option1" | null;
  hallOfResidence?: string | null;
  profilePicture?: InputJsonValue;
  year?: number | null;
  college?: CollegeWhereUniqueInput | null;
  department?: DepartmentWhereUniqueInput | null;
};
