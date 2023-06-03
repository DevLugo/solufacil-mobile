import { gql } from "@apollo/client";
import { userFields } from "../fragments";

export const GET_EMPLOYEE = gql`
query GetEmployee($where: EmployeeWhereUniqueInput!) {
    getEmployee(where: $where) {
      id
      type
      user {
        ...userFields
      }
      __typename
    }
  }
  ${userFields}
  `;
  
  
  