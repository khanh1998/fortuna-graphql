import { gql } from "apollo-server";

export const userSchema = gql`
  type User {
    id: ID
    username: String
    name: String
    avatar: String
    email: String
    phone: String
    language: String
    currency: String
  }
  type Query {
    User(id: ID!): User
  }
  input UserInput {
    username: String
    name: String
    avatar: String
    email: String
    phone: String
    language: String
    currency: String
    password: String
  }
  type Mutation {
    createUser(user: UserInput) : User
  }
`;
