import { College as TCollege } from "../api/college/College";

export const COLLEGE_TITLE_FIELD = "name";

export const CollegeTitle = (record: TCollege): string => {
  return record.name?.toString() || String(record.id);
};
