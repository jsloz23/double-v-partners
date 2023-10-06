import { Router } from "express";

import { createUser, getUsers } from "../controllers/users.controllers.js";

const router = Router();

router.post("/user", createUser);

router.get("/users", getUsers);

export default router;
