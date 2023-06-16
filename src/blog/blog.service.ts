import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDTO } from 'src/dto/blog.dto';

@Injectable()
export class BlogService {
  getBlogs(): string {
    return 'All Blogs';
  }
  getBlog(id: number): string {
    if (id % 2 === 0) return `One Blog with ${id} retrieved`;
    throw new NotFoundException();
  }
  deleteBlog(id: number): string {
    return 'Delete One Blog with id: ' + id;
  }
  updateBlog(id: number): string {
    return 'Updating One Blog with id: ' + id;
  }
  createBlog(createBlogDTO: CreateBlogDTO) {
    return createBlogDTO;
  }
}
