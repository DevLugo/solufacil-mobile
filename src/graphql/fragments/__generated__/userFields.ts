/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: userFields
// ====================================================

export interface userFields_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface userFields_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface userFields_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: userFields_employee_personalData_addresses_location_state;
  municipality: userFields_employee_personalData_addresses_location_municipality;
}

export interface userFields_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: userFields_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface userFields_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface userFields_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: userFields_employee_personalData_addresses[] | null;
  phones: userFields_employee_personalData_phones[] | null;
}

export interface userFields_employee {
  __typename: "Employee";
  personalData: userFields_employee_personalData;
}

export interface userFields {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: userFields_employee | null;
}
