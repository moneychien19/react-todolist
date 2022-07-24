import { gql } from 'apollo-boost'

export const FETCH_TODOLIST = gql`
  query {
    Todo(id: "1") {
      id
      title
      checked
      groupId
      content
    }
  }
`
