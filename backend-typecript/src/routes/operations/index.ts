import { Router } from "express";

import { CreateDepositControler } from "../../controllers/operations/deposit";
import { WithdrawController } from "../../controllers/operations/withdraw";
import { operationCpfValidator } from "../../middlewares/operationCpfValidator";
import { validValueOperation } from "../../middlewares/validValueOperation";

const operationsRoutes = Router();

operationsRoutes.post(
  "/deposit/:id",
  operationCpfValidator,
  validValueOperation,
  (request, response) => {
    return CreateDepositControler(request, response);
  }
);

operationsRoutes.post(
  "/withdraw/:id",
  operationCpfValidator,
  validValueOperation,
  (request, response) => {
    return WithdrawController(request, response);
  }
);

operationsRoutes.post("/extract", (request, response) => {
  return response.send();
});

export { operationsRoutes };
