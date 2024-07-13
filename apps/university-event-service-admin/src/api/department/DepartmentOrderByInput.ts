import { SortOrder } from "../../util/SortOrder";

export type DepartmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  collegeId?: SortOrder;
};
