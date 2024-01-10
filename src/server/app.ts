import "reflect-metadata"
import createServer from "./configuration";
import { PORT } from "../utility";
import { AppDataSource } from "../db/data-source";

const bootstrap = async () => {
    try {
        const app = createServer();
        AppDataSource.initialize()
            .then(() => {
                console.log(`Postgress Connected!`);
                app.listen(PORT, () => {
                    console.log(`server listen on ${PORT}`)
                });
            }
        );
    } catch (error) {
        console.log('Failed to Start Server', error);
    }
}

bootstrap();