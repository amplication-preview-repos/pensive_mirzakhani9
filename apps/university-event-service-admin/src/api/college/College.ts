import { User } from "../user/User";
import { Department } from "../department/Department";

export type College = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
  name: string | null;
  departments?: Array<Department>;
};
