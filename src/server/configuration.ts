import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export default function createServer() {
    const app = express();
    app.use(cors({
        origin: "*", // all origins
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE OPTIONS",
        exposedHeaders: 'Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR, access-token',
        preflightContinue: true,
        optionsSuccessStatus: 204
    }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    return app;
}