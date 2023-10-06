import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors());
app.use(express.json()); //Procesar los datos que vengan del cliente

app.use(usersRoutes);

app.listen(PORT);

console.log(`Server is running on port ${PORT}`);
