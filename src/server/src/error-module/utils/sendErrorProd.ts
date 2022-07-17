import { Request, Response } from "express";

export const sendErrorProd = (error: any, res: Response, req: Request) => {
  // Operational, trusted error: send message to client
  if (error.isOperational) {
    return res.status(error.statusCode).send({
      status: error.status,
      error: {
        statusCode: error.statusCode,
        message: error.message,
      },
    });
  }

  // Programming or other unknown error: don't leak error details'

  // 1) Log error
  console.error(`ERROR: `, error);

  // 2) Send generic message
  return res.render("404.ejs");
};
