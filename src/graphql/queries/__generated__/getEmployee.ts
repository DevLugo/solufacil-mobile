/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmployeeWhereUniqueInput, EmployeesTypes } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetEmployee
// ====================================================

export interface GetEmployee_getEmployee_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface GetEmployee_getEmployee_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface GetEmployee_getEmployee_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: GetEmployee_getEmployee_user_employee_personalData_addresses_location_state;
  municipality: GetEmployee_getEmployee_user_employee_personalData_addresses_location_municipality;
}

export interface GetEmployee_getEmployee_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: GetEmployee_getEmployee_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface GetEmployee_getEmployee_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface GetEmployee_getEmployee_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: GetEmployee_getEmployee_user_employee_personalData_addresses[] | null;
  phones: GetEmployee_getEmployee_user_employee_personalData_phones[] | null;
}

export interface GetEmployee_getEmployee_user_employee {
  __typename: "Employee";
  personalData: GetEmployee_getEmployee_user_employee_personalData;
}

export interface GetEmployee_getEmployee_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: GetEmployee_getEmployee_user_employee | null;
}

export interface GetEmployee_getEmployee {
  __typename: "Employee";
  id: string;
  type: EmployeesTypes;
  user: GetEmployee_getEmployee_user;
}

export interface GetEmployee {
  getEmployee: GetEmployee_getEmployee;
}

export interface GetEmployeeVariables {
  where: EmployeeWhereUniqueInput;
}
