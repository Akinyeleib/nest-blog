/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsPositive } from "class-validator"
import { IsStringNotEmpty } from "src/utils/helper"

export class CreateBlogDTO {
  @IsNotEmpty()
  @IsPositive()
  author_id: number
  
  @IsStringNotEmpty()
  title: string
  
  @IsStringNotEmpty()
  content: string
}
