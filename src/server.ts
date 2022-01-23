/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import-helpers/order-imports
import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));
