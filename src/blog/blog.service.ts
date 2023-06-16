import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
  ) {}
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
  createBlog(blog: Blog) {
    return this.blogRepository.save(blog);
  }
}
