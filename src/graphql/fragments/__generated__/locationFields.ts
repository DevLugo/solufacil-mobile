/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: locationFields
// ====================================================

export interface locationFields_state {
  __typename: "State";
  name: string;
}

export interface locationFields_municipality {
  __typename: "Municipality";
  name: string;
}

export interface locationFields {
  __typename: "Location";
  id: string;
  name: string;
  municipalityId: string;
  state: locationFields_state;
  municipality: locationFields_municipality;
}
