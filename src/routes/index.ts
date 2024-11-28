import { Router } from "express";
import  dogsRouter from "./dogs.routes";

const rota = Router();

rota.use(dogsRouter);

export { rota as routes };