/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SignInInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: signIn
// ====================================================

export interface signIn_signIn_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface signIn_signIn_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface signIn_signIn_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: signIn_signIn_user_employee_personalData_addresses_location_state;
  municipality: signIn_signIn_user_employee_personalData_addresses_location_municipality;
}

export interface signIn_signIn_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: signIn_signIn_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface signIn_signIn_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface signIn_signIn_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: signIn_signIn_user_employee_personalData_addresses[] | null;
  phones: signIn_signIn_user_employee_personalData_phones[] | null;
}

export interface signIn_signIn_user_employee {
  __typename: "Employee";
  personalData: signIn_signIn_user_employee_personalData;
}

export interface signIn_signIn_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: signIn_signIn_user_employee | null;
}

export interface signIn_signIn {
  __typename: "SignInOutput";
  token: string;
  user: signIn_signIn_user;
}

export interface signIn {
  signIn: signIn_signIn;
}

export interface signInVariables {
  input: SignInInput;
}
