import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  date?: SortOrder;
  location?: SortOrder;
  title?: SortOrder;
  organizer?: SortOrder;
};
