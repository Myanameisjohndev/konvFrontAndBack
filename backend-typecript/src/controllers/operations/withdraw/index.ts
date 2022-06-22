import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";
import UserDepositAccount from "../../../models/withdraw/UserDepositAccount";

const WithdrawController = async (request: Request, response: Response) => {
  const { returnUser } = request;
  const { value, cpf } = request.body;

  if (Number(value) > returnUser.account_value) {
    return response
      .status(400)
      .send({ error: "Você não possui este valor em conta" });
  }

  await CreateUser.updateOne({
    cpf: returnUser.cpf,
    account_value: returnUser.account_value - Number(value),
  }).then(async () => {
    await UserDepositAccount.create({ value, cpf })
      .then(() => {
        return response
          .status(200)
          .send({ message: "Saque feito com sucesso" });
      })
      .catch(() => {
        return response.status(400).send({ message: "Erro ao realizar saque" });
      });
  });
};

export { WithdrawController };
