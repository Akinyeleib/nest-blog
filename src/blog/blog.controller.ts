import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from 'src/dto/blog.dto';
import { UserService } from 'src/user/user.service';

@Controller('blog')
export class BlogController {
  constructor(
    private blogService: BlogService,
    private userService: UserService,
  ) {}
  @Get()
  getBlogs(): string {
    return this.blogService.getBlogs();
  }
  @Get('/:id')
  getBlog(@Param('id', ParseIntPipe) id: number): string {
    return this.blogService.getBlog(id);
  }
  @Post()
  async addBlog(@Body() createBlogDTO: CreateBlogDTO) {
    // check if user exists
    const user = await this.userService.getUserByID(createBlogDTO.author_id);
    // throw error if user does not exist
    if (!user) throw new ForbiddenException('Invalid Credentials');
    return this.blogService.createBlog(createBlogDTO);
  }
  @Delete('/:id')
  deleteBlog(@Param('id', ParseIntPipe) id: number): string {
    return this.blogService.deleteBlog(id);
  }
  @Patch('/:id')
  updateBlog(@Param('id', ParseIntPipe) id: number): string {
    return this.blogService.updateBlog(id);
  }
}
