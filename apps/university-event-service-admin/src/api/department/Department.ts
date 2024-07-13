import { User } from "../user/User";
import { College } from "../college/College";

export type Department = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
  name: string | null;
  college?: College | null;
};
