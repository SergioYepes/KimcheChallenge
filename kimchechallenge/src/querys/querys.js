import { gql } from "apollo-boost";

export const countries = gql `
query {
    countries{
        code
        name
        native
        phone
        capital
        emoji
        emojiU
    languages{
        code
        name
        native
        rtl
             }
    continent{
        name
             }
    states{
        code
        name
            }
        }
}
`
