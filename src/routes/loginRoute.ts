// src/routes/loginRoute.ts
import { Hono } from "hono";
import { AppDataSource } from "../datasource";
import { User } from "../entity/User";
import bcrypt from "bcryptjs";

export const loginRoute = new Hono();

loginRoute.post("/", async (c) => {
    const { username, password } = await c.req.json();
    const userRepo = AppDataSource.getRepository(User);

    const user = await userRepo.findOne({ where: { username } });
    if (!user) return c.text("Nom d'utilisateur incorrect", 401);

    const match = await bcrypt.compare(password, user.password);
    if (!match) return c.text("Mot de passe incorrect", 401);

    return c.json({
        id: user.id,
        username: user.username
    });
});
