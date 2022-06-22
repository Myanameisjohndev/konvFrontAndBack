import { Router } from "express";

import { CreateUserControler } from "../../controllers/user";
import { verifyExistAccountCpf } from "../../middlewares/validCpf";

const userRoutes = Router();

userRoutes.post("/", verifyExistAccountCpf, async (request, response) => {
  return CreateUserControler(request, response);
});

export { userRoutes };
