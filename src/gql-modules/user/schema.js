import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import path from 'path';

const schemaString = readFileSync(path.join(__dirname, 'user.gql'), {
  encoding: 'utf-8',
}).toString();
export const userSchema = gql`
  ${schemaString}
  type Query {
    User: User
  }
  type Mutation {
    createUser(user: UserInput): User
    updateUser(user: UserInput): User
  }
`;
