import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

export async function createInMemoryMongoURI() {
    const mongod = await MongoMemoryServer.create();
    return mongod.getUri();
}

export default async function connect(mongo_uri:string){
    await mongoose.connect(mongo_uri, {
        dbName: 'grocery_system',
    });
    console.log(`MongoDB connected to ${mongo_uri}`);
}