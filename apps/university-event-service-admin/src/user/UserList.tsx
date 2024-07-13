import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { COLLEGE_TITLE_FIELD } from "../college/CollegeTitle";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <BooleanField label="onCampus" source="onCampus" />
        <TextField label="hostelOfResidence" source="hostelOfResidence" />
        <TextField label="userName" source="userName" />
        <TextField label="role" source="role" />
        <TextField label="hallOfResidence" source="hallOfResidence" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="year" source="year" />
        <ReferenceField label="college" source="college.id" reference="College">
          <TextField source={COLLEGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
