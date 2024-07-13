import { Module } from "@nestjs/common";
import { CollegeModuleBase } from "./base/college.module.base";
import { CollegeService } from "./college.service";
import { CollegeController } from "./college.controller";
import { CollegeResolver } from "./college.resolver";

@Module({
  imports: [CollegeModuleBase],
  controllers: [CollegeController],
  providers: [CollegeService, CollegeResolver],
  exports: [CollegeService],
})
export class CollegeModule {}
