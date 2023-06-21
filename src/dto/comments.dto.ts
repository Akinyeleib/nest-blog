/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsPositive } from "class-validator"
import { IsStringNotEmpty } from "src/utils/helper"

export class CreateCommentDTO {

  @IsPositive()
  author_id: number
  
  @IsStringNotEmpty()
  content: string
  
  @IsPositive()
  user: number
  
  @IsPositive()
  blog: number

}
