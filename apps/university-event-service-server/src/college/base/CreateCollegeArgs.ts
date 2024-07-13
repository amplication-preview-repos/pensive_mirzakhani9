/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CollegeCreateInput } from "./CollegeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateCollegeArgs {
  @ApiProperty({
    required: true,
    type: () => CollegeCreateInput,
  })
  @ValidateNested()
  @Type(() => CollegeCreateInput)
  @Field(() => CollegeCreateInput, { nullable: false })
  data!: CollegeCreateInput;
}

export { CreateCollegeArgs as CreateCollegeArgs };