import { gql } from "@apollo/client";
import { loanTypesFields } from "../fragments";

export const LOAN_TYPES = gql`
query loanTypes($where: LoantypeWhereInput!){
	loanTypes(where:$where){
        ...loanTypesFields
        }
    }
    ${loanTypesFields}
`;