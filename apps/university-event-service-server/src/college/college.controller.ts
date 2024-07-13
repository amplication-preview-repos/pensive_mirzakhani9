import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollegeService } from "./college.service";
import { CollegeControllerBase } from "./base/college.controller.base";

@swagger.ApiTags("colleges")
@common.Controller("colleges")
export class CollegeController extends CollegeControllerBase {
  constructor(protected readonly service: CollegeService) {
    super(service);
  }
}
