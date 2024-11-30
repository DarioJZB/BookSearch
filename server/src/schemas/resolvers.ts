import { User } from '../models/index.js';
import { signToken, AuthenticationError } from '../services/auth.js';
import type { BookDocument } from '../models/Book.js';

interface UserData {
    _id: string;
    username: string;
    email: string;
    password: string;
    savedBooks: BookDocument[];
    bookCount: number;
}

interface UserArgs {
    userId: string;
}

interface Context {
    user?: UserData;
}

interface AddUserArgs {
    input: {
        username: string;
        email: string;
        password: string;
    }
}

interface BookArgs {
    userId: string;
    bookId: string;
}

const resolvers = {
    Query: {
        user: async (_parent: any, { userId }: UserArgs): Promise<UserData | null> => {
            return await User.findOne({ _id: userId });
        }, 
        me: async (_parent: any, _args: any, context: Context): Promise<UserData | null> => {
            if (context.user) {
                return await User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
        addUser: async (_parent: any, { input }: AddUserArgs): Promise< { token: string; user: UserData }> => {
            const user = await User.create({ ...input });
            const token = signToken(user.username, user.email, user._id);
            return { user, token };
        },
        login: async (_parent: any, { email, password }: { email: string; password: string }): Promise<{ token: string; user: UserData }> => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken( user.username, user.email, user._id);
            return { user, token };
        },
        saveBook: async (_parent: any, { userId, bookId }: BookArgs, context: Context): Promise<UserData | null> => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: userId },
                    { $addToSet: { savedBooks: bookId }},
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
        },
        deleteBook: async (_parent: any, { userId, bookId }: BookArgs, context: Context): Promise<UserData | null> => {
            if (context.user) {
                return await User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { savedBooks: bookId }},
                    { new: true }
                );
            }
            throw AuthenticationError;
        },
    },
};

export default resolvers;