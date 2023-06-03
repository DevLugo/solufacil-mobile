/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: loanPaymentFields
// ====================================================

export interface loanPaymentFields_comments {
  __typename: "Comment";
  id: string;
  text: string;
}

export interface loanPaymentFields_employee_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface loanPaymentFields_employee_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface loanPaymentFields_employee_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: loanPaymentFields_employee_user_employee_personalData_addresses_location_state;
  municipality: loanPaymentFields_employee_user_employee_personalData_addresses_location_municipality;
}

export interface loanPaymentFields_employee_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: loanPaymentFields_employee_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface loanPaymentFields_employee_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface loanPaymentFields_employee_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: loanPaymentFields_employee_user_employee_personalData_addresses[] | null;
  phones: loanPaymentFields_employee_user_employee_personalData_phones[] | null;
}

export interface loanPaymentFields_employee_user_employee {
  __typename: "Employee";
  personalData: loanPaymentFields_employee_user_employee_personalData;
}

export interface loanPaymentFields_employee_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: loanPaymentFields_employee_user_employee | null;
}

export interface loanPaymentFields_employee {
  __typename: "Employee";
  id: string;
  user: loanPaymentFields_employee_user;
}

export interface loanPaymentFields {
  __typename: "LoanPayment";
  id: string;
  amount: any;
  date: any;
  comments: loanPaymentFields_comments[] | null;
  employee: loanPaymentFields_employee;
  updatedAt: any;
  createdAt: any;
}
