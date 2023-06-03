/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BorrowerWhereInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: borrowers
// ====================================================

export interface borrowers_borrowers_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface borrowers_borrowers_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface borrowers_borrowers_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: borrowers_borrowers_personalData_addresses_location_state;
  municipality: borrowers_borrowers_personalData_addresses_location_municipality;
}

export interface borrowers_borrowers_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: borrowers_borrowers_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface borrowers_borrowers_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface borrowers_borrowers_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: borrowers_borrowers_personalData_addresses[] | null;
  phones: borrowers_borrowers_personalData_phones[] | null;
}

export interface borrowers_borrowers {
  __typename: "Borrower";
  id: string;
  personalData: borrowers_borrowers_personalData;
}

export interface borrowers {
  borrowers: borrowers_borrowers[];
}

export interface borrowersVariables {
  where: BorrowerWhereInput;
}
