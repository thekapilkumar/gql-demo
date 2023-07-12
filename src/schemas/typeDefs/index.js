import { buildSchema } from 'graphql';

export default buildSchema(`
    type Person {
        id: ID!
        name: String!
        created: String!
        updated: String!
    }

    type Query {
        hello: String!
        people: [Person!]
        person(id: ID!): Person!
    }

    type Mutation {
        createPerson(name: String!): Person!
        updatePerson(id: ID!, name: String!): Person!
        destrotyPerson(id: ID!): Person!
    }
`);
