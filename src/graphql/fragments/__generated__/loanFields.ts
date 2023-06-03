/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoanState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: loanFields
// ====================================================

export interface loanFields_payments_comments {
  __typename: "Comment";
  id: string;
  text: string;
}

export interface loanFields_payments_employee_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface loanFields_payments_employee_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface loanFields_payments_employee_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: loanFields_payments_employee_user_employee_personalData_addresses_location_state;
  municipality: loanFields_payments_employee_user_employee_personalData_addresses_location_municipality;
}

export interface loanFields_payments_employee_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: loanFields_payments_employee_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface loanFields_payments_employee_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface loanFields_payments_employee_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: loanFields_payments_employee_user_employee_personalData_addresses[] | null;
  phones: loanFields_payments_employee_user_employee_personalData_phones[] | null;
}

export interface loanFields_payments_employee_user_employee {
  __typename: "Employee";
  personalData: loanFields_payments_employee_user_employee_personalData;
}

export interface loanFields_payments_employee_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: loanFields_payments_employee_user_employee | null;
}

export interface loanFields_payments_employee {
  __typename: "Employee";
  id: string;
  user: loanFields_payments_employee_user;
}

export interface loanFields_payments {
  __typename: "LoanPayment";
  id: string;
  amount: any;
  date: any;
  comments: loanFields_payments_comments[] | null;
  employee: loanFields_payments_employee;
  updatedAt: any;
  createdAt: any;
}

export interface loanFields_employee_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface loanFields_employee_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface loanFields_employee_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: loanFields_employee_user_employee_personalData_addresses_location_state;
  municipality: loanFields_employee_user_employee_personalData_addresses_location_municipality;
}

export interface loanFields_employee_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: loanFields_employee_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface loanFields_employee_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface loanFields_employee_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: loanFields_employee_user_employee_personalData_addresses[] | null;
  phones: loanFields_employee_user_employee_personalData_phones[] | null;
}

export interface loanFields_employee_user_employee {
  __typename: "Employee";
  personalData: loanFields_employee_user_employee_personalData;
}

export interface loanFields_employee_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: loanFields_employee_user_employee | null;
}

export interface loanFields_employee {
  __typename: "Employee";
  id: string;
  user: loanFields_employee_user;
}

export interface loanFields_paymentSchedule {
  __typename: "PaymentSchedule";
  id: string;
}

export interface loanFields {
  __typename: "Loan";
  id: string;
  status: LoanState;
  payments: loanFields_payments[] | null;
  weeklyPaymentAmount: any;
  amountToPay: any;
  pendingAmount: any;
  employee: loanFields_employee;
  totalPaidAmount: number;
  paymentSchedule: loanFields_paymentSchedule[] | null;
  updatedAt: any;
  createdAt: any;
}
