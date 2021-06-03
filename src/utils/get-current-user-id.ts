
import { Request } from "express";
import { verify } from "jsonwebtoken";

interface Token {
  userId: string
}

// Gets the id of the currently logged in user
export function getCurrentUserId(request: Request) {
  const authorization = request.get("Authorization");

  if (authorization) {
    const token = authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, process.env.APP_SECRET || "") as Token;

    return verifiedToken && verifiedToken.userId;
  } else {
    throw Error("No Authorization Found")
  }
}
