import { applyDecorators } from '@nestjs/common';
import { IsNotEmpty, IsString } from "class-validator";
import * as jwt from "jsonwebtoken"
import { configDotenv } from 'dotenv';
import { User } from 'src/entity/user.entity';
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
  }, process.env.JSON_TOKEN_KEY);
  return token;
}
