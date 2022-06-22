import { Router } from "express";

import { verifyExistAccountCpf } from "../../middlewares/validCpf";

const operationsRoutes = Router();

operationsRoutes.get("/deposit", (request, response) => {
  return response.send({ message: "operationsRoutes" });
});

operationsRoutes.post("/post", verifyExistAccountCpf, (request, response) => {
  const { returnCpf } = request;

  console.log(returnCpf);

  return response.send({ returnCpf });
});

export { operationsRoutes };
