import { compare } from "bcrypt";
import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";
import { IUser } from "../create";

async function LoginUserControler(request: Request, response: Response) {
  const { cpf, password } = request.params;
  try {
    const user = (await CreateUser.findOne({ cpf })) as IUser;

    const comparePassword = compare(password, user.password);
    console.log(comparePassword);
    if (!comparePassword) {
      return response
        .status(500)
        .send({ error: "Sua senha ou cpf estão incorretos" });
    }

    const returnUser = {
      name: user.name,
      cpf: user.cpf,
      account_value: user.account_value,
    };

    return response.send({ returnUser });
  } catch (err) {
    return response.status(500).send({ error: "Tente novamente mais tarde" });
  }
}

export { LoginUserControler, IUser };
