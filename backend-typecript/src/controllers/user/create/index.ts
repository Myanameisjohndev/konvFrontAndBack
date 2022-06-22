import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";

interface IUser {
  cpf: string;
  name: string;
  password: string;
  account_value: number;
}

async function CreateUserControler(request: Request, response: Response) {
  const { cpf, name, password }: IUser = request.body;

  const user = {
    cpf,
    name,
    password,
    account_value: 0,
  };

  try {
    await CreateUser.create(user);
    return response.send({ user });
  } catch (err) {
    return response.status(500).send({ error: "Tente novamente mais tarde" });
  }
}

export { CreateUserControler, IUser };
