import { JsonValue } from "type-fest";
import { College } from "../college/College";
import { Department } from "../department/Department";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  onCampus: boolean | null;
  hostelOfResidence: string | null;
  userName: string | null;
  role?: "Option1" | null;
  hallOfResidence: string | null;
  profilePicture: JsonValue;
  year: number | null;
  college?: College | null;
  department?: Department | null;
};
