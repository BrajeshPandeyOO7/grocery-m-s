import { DataSource } from "typeorm";
import { Product } from "../entities/Product";
import path from "path";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Brajesh@1234",
    database: "grocery_db",
    entities: [`${path.join(__dirname, '../entities')}/*{.ts,.js}`],
    synchronize: true,
    logging: true,
})