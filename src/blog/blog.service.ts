import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlogDTO } from 'src/dto/blog.dto';
import { Blog } from 'src/entity/blog.entity';
import { User } from 'src/entity/user.entity';
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
    if (!user) throw new NotFoundException('Invlaid Blog Specified');
    return user;
  }
  deleteBlog(id: number) {
    return this.blogRepository.delete(id);
  }
  updateBlog(id: number): string {
    return 'Updating One Blog with id: ' + id;
  }
  createBlog(createBlogDTO: CreateBlogDTO, user: User): Promise<Blog> {
    // De-Structuring
    const { title, content } = createBlogDTO;
    // object of Blog
    const blog = new Blog();
    blog.title = title;
    blog.content = content;
    blog.user = user;
    return this.blogRepository.save(blog);
  }
}
