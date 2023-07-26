import { ForbiddenException, applyDecorators } from '@nestjs/common';
import { IsNotEmpty, IsString } from "class-validator";
import * as jwt from "jsonwebtoken"
import { User } from 'src/entity/user.entity';
import { configDotenv } from 'dotenv';
configDotenv()

export function IsStringNotEmpty() {
  return applyDecorators(
    IsString(),
    IsNotEmpty()
  );
}

export async function generateToken(user: User): Promise<string> {
  const token = await jwt.sign({
    id: user.id,
    email: user.email,
    expiresIn: "360000s",
  }, process.env.JSON_TOKEN_KEY);
  return token;
}

export function retrieveTokenFromHeader(req: any, headers: any) {
  const token = headers.authorization
    if (!token) {
      throw new ForbiddenException("Invalid token");
    } else {
      const validToken: any = jwt.verify(token.split(" ")[1], process.env.JSON_TOKEN_KEY)
      console.log(validToken)
      req.currentUser = {"id" : validToken?.id, "email" : validToken?.email};
      // console.log(`current user: ${req.currentUser}`)
      return true;
    }
}
