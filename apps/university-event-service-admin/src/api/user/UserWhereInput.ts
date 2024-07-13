import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CollegeWhereUniqueInput } from "../college/CollegeWhereUniqueInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  onCampus?: BooleanNullableFilter;
  hostelOfResidence?: StringNullableFilter;
  userName?: StringNullableFilter;
  role?: "Option1";
  hallOfResidence?: StringNullableFilter;
  profilePicture?: JsonFilter;
  year?: IntNullableFilter;
  college?: CollegeWhereUniqueInput;
  department?: DepartmentWhereUniqueInput;
};
