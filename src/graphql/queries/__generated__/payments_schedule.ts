/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentScheduleWhereInput, PaymentState } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: payments_schedule
// ====================================================

export interface payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses_location_state;
  municipality: payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses_location_municipality;
}

export interface payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface payments_schedule_paymentSchedulesWhere_borrower_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface payments_schedule_paymentSchedulesWhere_borrower_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: payments_schedule_paymentSchedulesWhere_borrower_personalData_addresses[] | null;
  phones: payments_schedule_paymentSchedulesWhere_borrower_personalData_phones[] | null;
}

export interface payments_schedule_paymentSchedulesWhere_borrower {
  __typename: "Borrower";
  id: string;
  personalData: payments_schedule_paymentSchedulesWhere_borrower_personalData;
}

export interface payments_schedule_paymentSchedulesWhere_loan_loanType {
  __typename: "Loantype";
  id: string;
  name: string;
  weekDuration: number;
  rate: number;
  overdueRate: number;
  createdAt: any;
  updatedAt: any;
}

export interface payments_schedule_paymentSchedulesWhere_loan {
  __typename: "Loan";
  id: string;
  loanType: payments_schedule_paymentSchedulesWhere_loan_loanType;
}

export interface payments_schedule_paymentSchedulesWhere {
  __typename: "PaymentSchedule";
  id: string;
  numeration: number;
  dueDate: any;
  amountToPay: any;
  pendingAmount: number;
  status: PaymentState;
  borrower: payments_schedule_paymentSchedulesWhere_borrower | null;
  loan: payments_schedule_paymentSchedulesWhere_loan;
}

export interface payments_schedule {
  paymentSchedulesWhere: payments_schedule_paymentSchedulesWhere[];
}

export interface payments_scheduleVariables {
  where: PaymentScheduleWhereInput;
}
