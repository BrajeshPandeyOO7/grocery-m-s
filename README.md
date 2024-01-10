## Make sure you have postgress database. If not please install
[postgress](https://www.postgresql.org/download/) follow link to install postgresql.

## Update db configuration 

```bash
# created database "grocery_db",
# "src/db/data-source.ts"
# then add password follow below example

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "grocery_db",
    entities: [`{path.join(__dirname, '../entities')}/*{.ts,.js}`],
    synchronize: true,
    logging: true,
})

```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev:watch

# Running on production mode use below command
$ npm run build
$ npm run start:prod
```