/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: borrowerFields
// ====================================================

export interface borrowerFields_personalData_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface borrowerFields_personalData_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface borrowerFields_personalData_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: borrowerFields_personalData_addresses_location_state;
  municipality: borrowerFields_personalData_addresses_location_municipality;
}

export interface borrowerFields_personalData_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: borrowerFields_personalData_addresses_location;
  locationId: string;
  references: string | null;
}

export interface borrowerFields_personalData_phones {
  __typename: "Phone";
  number: string;
}

export interface borrowerFields_personalData {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: borrowerFields_personalData_addresses[] | null;
  phones: borrowerFields_personalData_phones[] | null;
}

export interface borrowerFields {
  __typename: "Borrower";
  id: string;
  personalData: borrowerFields_personalData;
}
