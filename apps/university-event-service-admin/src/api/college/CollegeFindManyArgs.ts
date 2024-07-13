import { CollegeWhereInput } from "./CollegeWhereInput";
import { CollegeOrderByInput } from "./CollegeOrderByInput";

export type CollegeFindManyArgs = {
  where?: CollegeWhereInput;
  orderBy?: Array<CollegeOrderByInput>;
  skip?: number;
  take?: number;
};
