import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";

const WithdrawController = async (request: Request, response: Response) => {
  const { returnUser } = request;
  const { value } = request.body;

  if (Number(value) > returnUser.account_value) {
    return response
      .status(400)
      .send({ error: "Você não possui este valor em conta" });
  }

  await CreateUser.updateOne({
    cpf: returnUser.cpf,
    account_value: returnUser.account_value - Number(value),
  }).then(() => {
    return response.status(200).send({ message: "Saque feito com sucesso" });
  });
};

export { WithdrawController };
