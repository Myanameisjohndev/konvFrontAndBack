import mongoose, { Schema } from "mongoose";

const UserBankAccount: Schema = new Schema({
  cpf: { type: String, required: true },
  value: { type: Number },
});

export default mongoose.model("UserBankAccount", UserBankAccount);
