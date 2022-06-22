import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";

async function CreateDepositControler(request: Request, response: Response) {
  const { returnUser } = request;
  const { value } = request.body;

  await CreateUser.updateOne({
    cpf: returnUser.cpf,
    account_value: Number(returnUser.account_value) + Number(value),
  }).then(() => {
    return response.status(200).send({ message: "Depósito feito com sucesso" });
  });
}

export { CreateDepositControler };
