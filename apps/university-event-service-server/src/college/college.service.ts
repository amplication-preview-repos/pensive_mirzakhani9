import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollegeServiceBase } from "./base/college.service.base";

@Injectable()
export class CollegeService extends CollegeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
