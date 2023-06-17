import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
  ) {}
  getBlogs(): Promise<Blog[]> {
    return this.blogRepository.find();
  }
  async getBlog(id: number): Promise<Blog> {
    const user = await this.blogRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException();
    return user;
  }
  deleteBlog(id: number) {
    return this.blogRepository.delete(id);
  }
  updateBlog(id: number): string {
    return 'Updating One Blog with id: ' + id;
  }
  createBlog(blog: Blog): Promise<Blog> {
    return this.blogRepository.save(blog);
  }
}
