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

export const SET_EDIT_MUTATION = gql`
    mutation setEditName($edit: Boolean!, $_id: String!){
  update_names(where: {_id: {_eq: $_id }}, 
  _set: {
    edit: true
  }) 
  {
    affected_rows
  }

    }
`;

export const CANCEL_EDIT_MUTATION = gql`
    mutation cancelName($edit: Boolean!, $_id: String!){
  update_names(where: {_id: {_eq: $_id }}, 
  _set: {
    edit: false
  }) 
  {
    affected_rows
  }

    }
`;

export const SAVE_EDIT_MUTATION = gql`
    mutation saveName($edit: Boolean!, $_id: String!, $name: String!){
  update_names(where: {_id: {_eq: $_id }}, 
  _set: {
    edit: false,
    name: $name,
  }) 
  {
    affected_rows
  }

    }
`;

export const ALL_NAMES_SUBSCRIPTION = gql`
  subscription namesSubscription {
    names {
        _id
        name
    }
  }
`;