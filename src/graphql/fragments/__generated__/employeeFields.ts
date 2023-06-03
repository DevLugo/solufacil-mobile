/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: employeeFields
// ====================================================

export interface employeeFields_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface employeeFields_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface employeeFields_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: employeeFields_user_employee_personalData_addresses_location_state;
  municipality: employeeFields_user_employee_personalData_addresses_location_municipality;
}

export interface employeeFields_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: employeeFields_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface employeeFields_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface employeeFields_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: employeeFields_user_employee_personalData_addresses[] | null;
  phones: employeeFields_user_employee_personalData_phones[] | null;
}

export interface employeeFields_user_employee {
  __typename: "Employee";
  personalData: employeeFields_user_employee_personalData;
}

export interface employeeFields_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: employeeFields_user_employee | null;
}

export interface employeeFields {
  __typename: "Employee";
  id: string;
  user: employeeFields_user;
}
