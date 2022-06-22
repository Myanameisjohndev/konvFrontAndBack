import { Router } from "express";

import { CreateDepositControler } from "../../controllers/operations/deposit";
import { WithdrawController } from "../../controllers/operations/withdraw";
import { searchUserAccount } from "../../middlewares/searchUserAccount";

const operationsRoutes = Router();

operationsRoutes.post(
  "/deposit/:id",
  searchUserAccount,
  (request, response) => {
    return CreateDepositControler(request, response);
  }
);

operationsRoutes.post(
  "/withdraw/:id",
  searchUserAccount,
  (request, response) => {
    return WithdrawController(request, response);
  }
);

operationsRoutes.post("/extract", searchUserAccount, (request, response) => {
  return response.send();
});

export { operationsRoutes };
