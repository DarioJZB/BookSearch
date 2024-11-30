import { gql } from "graphql-tag";


const typeDefs = gql`
    type Auth {
        token: String!
        user: User!
    }

    type User {
        _id: ID!
        username: String
        email: String
        password: String
        savedBooks: [Book]
        bookCount: Int
    }

    type Book {
        bookId: ID!
        title: String
        authors: [String]
        description: String
        image: String
        link: String    
    }

    input BookInput {
        bookId: ID!
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Query {
        me: User
        user(userId: ID!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(book: BookInput!): User
        deleteBook(bookId: ID!): User        
    }
`;

export default typeDefs;