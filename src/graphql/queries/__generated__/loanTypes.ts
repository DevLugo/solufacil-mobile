/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoantypeWhereInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: loanTypes
// ====================================================

export interface loanTypes_loanTypes {
  __typename: "Loantype";
  id: string;
  name: string;
  weekDuration: number;
  rate: number;
  overdueRate: number;
  createdAt: any;
  updatedAt: any;
}

export interface loanTypes {
  loanTypes: loanTypes_loanTypes[];
}

export interface loanTypesVariables {
  where: LoantypeWhereInput;
}
