/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RouteWhereInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetRoutes
// ====================================================

export interface GetRoutes_getRoutes_localities_leads_personalData {
  __typename: "PersonalData";
  id: string;
  fullName: string;
}

export interface GetRoutes_getRoutes_localities_leads {
  __typename: "Employee";
  id: string;
  personalData: GetRoutes_getRoutes_localities_leads_personalData;
}

export interface GetRoutes_getRoutes_localities {
  __typename: "Location";
  id: string;
  name: string;
  leads: GetRoutes_getRoutes_localities_leads[];
}

export interface GetRoutes_getRoutes {
  __typename: "Route";
  id: string;
  name: string;
  localities: GetRoutes_getRoutes_localities[] | null;
}

export interface GetRoutes {
  getRoutes: GetRoutes_getRoutes[];
}

export interface GetRoutesVariables {
  where: RouteWhereInput;
}
