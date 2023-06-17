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
import { Blog } from 'src/entity/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(
    private blogService: BlogService,
    private userService: UserService,
  ) {}
  @Get()
  getBlogs(): Promise<Blog[]> {
    return this.blogService.getBlogs();
  }
  @Get('/:id')
  getBlog(@Param('id', ParseIntPipe) id: number): Promise<Blog> {
    return this.blogService.getBlog(id);
  }
  @Post()
  async addBlog(@Body() createBlogDTO: CreateBlogDTO): Promise<Blog> {
    // check if user exists
    const user = await this.userService.getUserByID(createBlogDTO.author_id);
    // throw error if user does not exist
    if (!user) throw new ForbiddenException('Invalid Author');
    // De-Structuring
    const { title, content } = createBlogDTO;
    // object of Blog
    const blog = new Blog();
    blog.title = title;
    blog.content = content;
    blog.user = user;

    return this.blogService.createBlog(blog);
  }
  @Delete('/:id')
  deleteBlog(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.deleteBlog(id);
  }
  @Patch('/:id')
  updateBlog(@Param('id', ParseIntPipe) id: number): string {
    return this.blogService.updateBlog(id);
  }
}
