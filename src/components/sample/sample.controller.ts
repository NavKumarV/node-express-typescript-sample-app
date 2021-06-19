import { Request, Response } from "express"
import { responseHandler } from "../../lib/response-handler/response-handler";
import { Serv_CresteSample } from "./sample.service";

export function Ctrl_CreateSample({ body: reqData }: Request, res: Response) {
  const resData = Serv_CresteSample(reqData);
  responseHandler(res, resData);
}