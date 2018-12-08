import gql from 'graphql-tag'

export const ALL_NAMES_QUERY = gql`
  query names {
    names {
        _id
        name
    }
  }
`;

export const DELETE_NAME_MUTATION = gql`
    mutation removeName($_id: String!){
        delete_names(where: {_id: {_eq: $_id}}) {
            affected_rows
        }
    }
`;

export const ADD_NAME_MUTATION = gql`
    mutation submitName($name: String!, $_id: String!){
        insert_names(objects: [{name: $name, _id: $_id}]) {
            affected_rows
        }
    }
`;

export const UPDATE_SUBSCRIPTION = gql`
subscription names {
    names {
      _id
      name
    }
  }
`;