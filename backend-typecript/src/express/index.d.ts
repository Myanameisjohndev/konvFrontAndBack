/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  export interface Request {
    returnCpf: string | string[] | undefined;
  }
}
