import {gql} from '@apollo/client'

export const LOAD_BOOKS = gql`
    query {
        books{
            id,
            name,
            author{
                name
            }
        }
    }
`;