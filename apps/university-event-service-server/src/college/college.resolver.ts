import * as graphql from "@nestjs/graphql";
import { CollegeResolverBase } from "./base/college.resolver.base";
import { College } from "./base/College";
import { CollegeService } from "./college.service";

@graphql.Resolver(() => College)
export class CollegeResolver extends CollegeResolverBase {
  constructor(protected readonly service: CollegeService) {
    super(service);
  }
}
