/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: personalDataFields
// ====================================================

export interface personalDataFields_addresses_location_state {
  __typename: "State";
  name: string;
}

export interface personalDataFields_addresses_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface personalDataFields_addresses_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: personalDataFields_addresses_location_state;
  municipality: personalDataFields_addresses_location_municipality;
}

export interface personalDataFields_addresses {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: personalDataFields_addresses_location;
  locationId: string;
  references: string | null;
}

export interface personalDataFields_phones {
  __typename: "Phone";
  number: string;
}

export interface personalDataFields {
  __typename: "PersonalData";
  fullName: string;
  firstName: string;
  lastName: string;
  addresses: personalDataFields_addresses[] | null;
  phones: personalDataFields_phones[] | null;
}
