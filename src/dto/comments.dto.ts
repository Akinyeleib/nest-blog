import { IsPositive } from "class-validator"
import { IsStringNotEmpty } from "src/utils/helper"

export class CreateCommentDTO {

  @IsPositive()
  author_id: number
  
  @IsStringNotEmpty()
  content: string

}
