import { formatResponse } from "../../lib/response-handler/response-handler";
import { HTTP_MESSAGES, HTTP_STATUS } from "../../lib/response-handler/response-model";

export function Serv_CresteSample(data: any) {

  // Write your business logic

  return formatResponse(HTTP_STATUS.OK, HTTP_MESSAGES.OK, data, true);
}