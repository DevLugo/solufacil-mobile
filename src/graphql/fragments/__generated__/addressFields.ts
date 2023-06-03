/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: addressFields
// ====================================================

export interface addressFields_location_state {
  __typename: "State";
  name: string;
}

export interface addressFields_location_municipality {
  __typename: "Municipality";
  name: string;
}

export interface addressFields_location {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: addressFields_location_state;
  municipality: addressFields_location_municipality;
}

export interface addressFields {
  __typename: "Address";
  street: string;
  exteriorNumber: string | null;
  interiorNumber: string;
  postalCode: string;
  location: addressFields_location;
  locationId: string;
  references: string | null;
}
