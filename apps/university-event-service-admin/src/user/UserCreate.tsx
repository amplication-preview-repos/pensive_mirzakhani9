import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  BooleanInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { CollegeTitle } from "../college/CollegeTitle";
import { DepartmentTitle } from "../department/DepartmentTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="onCampus" source="onCampus" />
        <TextInput label="hostelOfResidence" source="hostelOfResidence" />
        <TextInput label="userName" source="userName" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="hallOfResidence" source="hallOfResidence" />
        <div />
        <NumberInput step={1} label="year" source="year" />
        <ReferenceInput source="college.id" reference="College" label="college">
          <SelectInput optionText={CollegeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="department.id"
          reference="Department"
          label="department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
