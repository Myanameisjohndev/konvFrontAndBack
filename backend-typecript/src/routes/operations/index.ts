import { Router } from "express";

import { CreateDepositControler } from "../../controllers/operations/deposit";
import { searchUserAccount } from "../../middlewares/searchUserAccount";
import { verifyExistAccountCpf } from "../../middlewares/validCpf";

const operationsRoutes = Router();

operationsRoutes.post(
  "/deposit/:id",
  searchUserAccount,
  (request, response) => {
    return CreateDepositControler(request, response);
  }
);

operationsRoutes.post(
  "/withdraw",
  verifyExistAccountCpf,
  (request, response) => {
    return response.send();
  }
);

operationsRoutes.post(
  "/extract",
  verifyExistAccountCpf,
  (request, response) => {
    return response.send();
  }
);

export { operationsRoutes };
