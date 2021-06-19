export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  DUPLICATE: 409,
  ERR: 412,
  NO_CONTENT: 422,
};

export const HTTP_MESSAGES = {
  OK: 'Successful',
  CREATED: 'created successfully',
  DELETED: 'deleted successfully',
  EDITED: 'edited successfully',
  ADDED: 'added successfully',
  FORBIDDEN: 'Request denied',
  BAD_REQUEST: 'Bad request',
  NOT_FOUND: 'Data not found',
  DUPLICATE: 'Duplicate entry not allowed',
  ERR: 'Some error occured',
  NO_CONTENT: 'Mandatory fields should not be empty',
};

export interface ResponseHandlerObj {
  statusCode: number;
  message: string;
  data?: any;
  success?: boolean;
};