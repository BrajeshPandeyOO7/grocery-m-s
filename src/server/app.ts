import { Request, Response } from "express";
import createServer from "./configuration";
import { MONGO_URI, PORT } from "../utility";
import connect from "../db";

const bootstrap = async () => {
    try {
        const app = createServer();
        await connect(MONGO_URI!);
        app.listen(PORT, () => {
            console.log(`server listen on ${PORT}`)
        });
    } catch (error) {
        console.log('Failed to Start Server', error);
    }
}

bootstrap();