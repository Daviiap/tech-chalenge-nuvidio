import { Router } from "express";

const routes = Router();

routes.put("/:userId");
routes.delete("/:userId");
routes.get("/:userId");
routes.get("/");

export default routes;
