import { applyDecorators } from '@nestjs/common';
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

export function retrieveTokenFromHeader() {
  
}
