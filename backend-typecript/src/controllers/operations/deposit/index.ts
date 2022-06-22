import { Request, Response } from "express";

import UserDepositAccount from "../../../models/deposit/UserDepositAccount";
import CreateUser from "../../../models/user/UserBankAccount";

async function CreateDepositControler(request: Request, response: Response) {
  const { returnUser } = request;
  const { cpf, value } = request.body;

  await CreateUser.updateOne({
    cpf: returnUser.cpf,
    account_value: Number(returnUser.account_value) + Number(value),
  }).then(async () => {
    await UserDepositAccount.create({ value, cpf })
      .then(() => {
        return response
          .status(200)
          .send({ message: "Depósito feito com sucesso" });
      })
      .catch(() => {
        return response
          .status(400)
          .send({ message: "Erro ao realizar depósito" });
      });
  });
}

export { CreateDepositControler };
