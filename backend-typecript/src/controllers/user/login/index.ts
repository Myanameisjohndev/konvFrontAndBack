import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";
import { IUser } from "../create";

async function LoginUserControler(request: Request, response: Response) {
  const { cpf, password }: IUser = request.body;

  try {
    const user = (await CreateUser.findOne({ cpf })) as IUser;

    if (user.password !== password) {
      return response
        .status(500)
        .send({ error: "Sua senha ou cpf estão incorretos" });
    }

    return response.send({ user });
  } catch (err) {
    return response.status(500).send({ error: "Tente novamente mais tarde" });
  }
}

export { LoginUserControler, IUser };
