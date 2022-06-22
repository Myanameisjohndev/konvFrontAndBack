import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";

async function CreateDepositControler(request: Request, response: Response) {
  const { returnUser } = request;
}

export { CreateDepositControler };
