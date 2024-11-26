import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGODBURI || '';

const db = async(): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connected.');
        return mongoose.connection;
    } catch (err) {
        console.error('Database connection error: ', err);
        throw new Error('Databse connection failed.');
    }
};

export default db;
//Code beloq has been refactored
// import mongoose from 'mongoose';

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

// export default mongoose.connection;
