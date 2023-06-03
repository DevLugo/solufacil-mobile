/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BorrowerWhereUniqueInput, LoanState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getBorrower
// ====================================================

export interface getBorrower_getBorrower_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface getBorrower_getBorrower_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface getBorrower_getBorrower_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: getBorrower_getBorrower_personalData_addresses_location_state;
  municipality: getBorrower_getBorrower_personalData_addresses_location_municipality;
}

export interface getBorrower_getBorrower_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: getBorrower_getBorrower_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface getBorrower_getBorrower_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface getBorrower_getBorrower_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: getBorrower_getBorrower_personalData_addresses[] | null;
  phones: getBorrower_getBorrower_personalData_phones[] | null;
}

export interface getBorrower_getBorrower_activeLoan_payments_comments {
  __typename: "Comment";
  id: string;
  text: string;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses_location_state;
  municipality: getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses_location_municipality;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_addresses[] | null;
  phones: getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData_phones[] | null;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user_employee {
  __typename: "Employee";
  personalData: getBorrower_getBorrower_activeLoan_payments_employee_user_employee_personalData;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: getBorrower_getBorrower_activeLoan_payments_employee_user_employee | null;
}

export interface getBorrower_getBorrower_activeLoan_payments_employee {
  __typename: "Employee";
  id: string;
  user: getBorrower_getBorrower_activeLoan_payments_employee_user;
}

export interface getBorrower_getBorrower_activeLoan_payments {
  __typename: "LoanPayment";
  id: string;
  amount: any;
  date: any;
  comments: getBorrower_getBorrower_activeLoan_payments_comments[] | null;
  employee: getBorrower_getBorrower_activeLoan_payments_employee;
  updatedAt: any;
  createdAt: any;
}

export interface getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses_location_state;
  municipality: getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses_location_municipality;
}

export interface getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface getBorrower_getBorrower_activeLoan_employee_user_employee_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_addresses[] | null;
  phones: getBorrower_getBorrower_activeLoan_employee_user_employee_personalData_phones[] | null;
}

export interface getBorrower_getBorrower_activeLoan_employee_user_employee {
  __typename: "Employee";
  personalData: getBorrower_getBorrower_activeLoan_employee_user_employee_personalData;
}

export interface getBorrower_getBorrower_activeLoan_employee_user {
  __typename: "User";
  id: string;
  email: string;
  lastLogin: any | null;
  createdAt: any;
  updatedAt: any;
  employee: getBorrower_getBorrower_activeLoan_employee_user_employee | null;
}

export interface getBorrower_getBorrower_activeLoan_employee {
  __typename: "Employee";
  id: string;
  user: getBorrower_getBorrower_activeLoan_employee_user;
}

export interface getBorrower_getBorrower_activeLoan_paymentSchedule {
  __typename: "PaymentSchedule";
  id: string;
}

export interface getBorrower_getBorrower_activeLoan {
  __typename: "Loan";
  id: string;
  status: LoanState;
  payments: getBorrower_getBorrower_activeLoan_payments[] | null;
  weeklyPaymentAmount: any;
  amountToPay: any;
  pendingAmount: any;
  employee: getBorrower_getBorrower_activeLoan_employee;
  totalPaidAmount: number;
  paymentSchedule: getBorrower_getBorrower_activeLoan_paymentSchedule[] | null;
  updatedAt: any;
  createdAt: any;
}

export interface getBorrower_getBorrower {
  __typename: "Borrower";
  id: string;
  personalData: getBorrower_getBorrower_personalData;
  activeLoan: getBorrower_getBorrower_activeLoan | null;
}

export interface getBorrower {
  getBorrower: getBorrower_getBorrower;
}

export interface getBorrowerVariables {
  where: BorrowerWhereUniqueInput;
}
