import { Router } from "express";

import { CreateUserControler } from "../../controllers/user/create";
import { LoginUserControler } from "../../controllers/user/login";
import { verifyExistAccountCpf } from "../../middlewares/validCpf";

const userRoutes = Router();

userRoutes.post("/", verifyExistAccountCpf, async (request, response) => {
  return CreateUserControler(request, response);
});

userRoutes.post("/login", async (request, response) => {
  return LoginUserControler(request, response);
});

export { userRoutes };
