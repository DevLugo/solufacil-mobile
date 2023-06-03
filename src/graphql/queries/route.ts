import { gql } from "@apollo/client";

export const ROUTES = gql`
    query GetRoutes(
        $where: RouteWhereInput!
    ){
        getRoutes(where: $where){
            id
            name
            localities{
                id
                name
                leads{
                    id
                    personalData{
                        id
                        fullName
                    }
                }
            }
        }
    }
`;