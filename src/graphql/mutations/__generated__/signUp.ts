/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_signUp {
  __typename: "User";
  id: string;
  email: string;
}

export interface signUp {
  signUp: signUp_signUp;
}

export interface signUpVariables {
  input: UserCreateInput;
}
