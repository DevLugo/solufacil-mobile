import { gql } from "@apollo/client";
import { loanFields, personalDataFields } from "../fragments";

export const BORROWERS = gql`
    query borrowers(
        $where: BorrowerWhereInput!
    ){
        borrowers(where: $where){
            id
            personalData{
                ...personalDataFields
            }
        }
    }
${personalDataFields}
`;

export const GET_BORROWER = gql`
    query getBorrower(
        $where: BorrowerWhereUniqueInput!
    ){
        getBorrower(where: $where){
            id
            personalData{
                ...personalDataFields
            }
            activeLoan{
                ...loanFields
            }
        }
    }
${personalDataFields}
${loanFields}
`;
