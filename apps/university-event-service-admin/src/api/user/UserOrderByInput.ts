import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  onCampus?: SortOrder;
  hostelOfResidence?: SortOrder;
  userName?: SortOrder;
  role?: SortOrder;
  hallOfResidence?: SortOrder;
  profilePicture?: SortOrder;
  year?: SortOrder;
  collegeId?: SortOrder;
  departmentId?: SortOrder;
};
