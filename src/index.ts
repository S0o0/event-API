// src/index.ts
import "reflect-metadata";
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { config } from 'dotenv';
import { AppDataSource } from "./datasource";
import { loginRoute } from "./routes/loginRoute";
import { registerRoute } from "./routes/registerRoute";

config(); // Charge les variables d'environnement depuis .env

AppDataSource.initialize()
    .then(() => console.log("✅ Database connected using TypeORM"))
    .catch((error) => console.error("❌ DB Connection Error:", error));

const app = new Hono();

app.use('*', cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization']
}));

app.route('/login', loginRoute);
app.route('/register', registerRoute);

export default {
    port: 4000,
    fetch: app.fetch
};
