import { gql } from "@apollo/client";
import { userFields } from "../../graphql/fragments";

export const SIGN_IN = gql`
mutation signIn(
    $input: SignInInput!
    ){
        signIn(input:$input){
        token
        user {
            ...userFields
        }
    }
}
${userFields}
`;

export const SIGN_UP = gql`
    mutation signUp(
        $input: UserCreateInput!
    ){
        signUp(input:$input){
            id
            email
        }
    }
`;