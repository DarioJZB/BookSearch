import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                savedBooks {
                    bookId
                    title
                    authors
                    description
                    image
                    link
                }
                bookCount
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($userInfo: userInput) {
        addUser(userInfo: $userInfo) {
            token
            user {
                _id
                username
                email
                savedBooks {
                    bookId
                    title
                    authors
                    description
                    image
                    link
                }
                bookCount
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($book: BookInput!) {
        saveBook(book: $book) {
            _id
            username
            savedBooks {
                bookId
                authors
                title
                link
                image
                description
            }
            bookCount
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook($bookId: String!) {
        deleteBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
            bookCount
        }
    }
`;