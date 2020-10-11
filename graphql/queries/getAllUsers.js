const {gql} = require('@apollo/client');

export const GET_ALL_USERS = gql`
  # Write your query or mutation here
  query {
    users {
      data {
        id
        name
        username
        albums {
          data {
            id
            title
            photos {
              data {
                url
              }
            }
          }
        }
      }
    }
  }
`;
