import { NextResponse } from "next/server";
import prisma from "./pg";

export const StatusMsg = {
  200: "Success",
  404: "Not Found",
  500: "Server Error",
};

export enum BusinessCode {
  normal = 200,
  abnormal = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  internalError = 500,
  badRequest = 400,
}

export function responseHandler<T>(
  data: T,
  status = 200,
  code = BusinessCode.normal,
  message = "success"
) {
  prisma.$disconnect();

  return NextResponse.json({ message, data, code }, { status });
}
