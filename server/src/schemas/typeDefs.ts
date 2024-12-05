import { gql } from "graphql-tag";

const typeDefs = gql`
    type Auth {
        token: String!
        user: User!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
        bookCount: Int
    }

    type Book {
        bookId: String!
        title: String!
        authors: [String]
        description: String
        image: String
        link: String    
    }

    input BookInput {
        bookId: String
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

    input userInput {
        username: String!
        email: String!
        password: String!
    }

    type Mutation {
        addUser(userInfo: userInput): Auth
        login(email: String!, password: String!): Auth
        saveBook(book: BookInput!): User
        deleteBook(bookId: String!): User        
    }
`;

export default typeDefs;