import { gql } from 'apollo-boost'

export const FETCH_TODOLIST = gql`
  query {
    Todo(id: "3") {
      id
      title
      checked
    }
  }
`
