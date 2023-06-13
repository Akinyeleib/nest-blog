import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}
  @Get()
  getBlogs(): string {
    return this.blogService.getBlogs();
  }
  @Get('/:id')
  getBlog(@Param('id', ParseIntPipe) id: number): string {
    return this.blogService.getBlog(id);
  }
  @Post()
  addBlog(): string {
    return this.blogService.createBlog();
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
