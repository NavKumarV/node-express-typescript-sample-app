import { Response } from 'express';
import { HTTP_MESSAGES, HTTP_STATUS, ResponseHandlerObj } from './response-model';

export function responseHandler(res: Response, resData: ResponseHandlerObj) {
  res.status(resData.statusCode).send(resData);
}

export function formatResponse(statusCode: number, message: string, data?: any, success?: boolean) {
  const respObj: ResponseHandlerObj = {
    statusCode: statusCode || HTTP_STATUS.BAD_REQUEST,
    message: message || HTTP_MESSAGES.BAD_REQUEST,
    data,
    success: success || false,
  };
  return respObj;
}
