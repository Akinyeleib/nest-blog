

import { IsStringNotEmpty } from 'src/utils/helper';

export class LoginDTO {

  @IsStringNotEmpty()
  loginID: string;

  @IsStringNotEmpty()
  password: string;

}
