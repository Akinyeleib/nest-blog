/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  getUserByID(id: number) {
    return this.userRepository.findOne({where: {id}});
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOne({where: {email}});
  }

  getUserByUsername(username: string) {
    return this.userRepository.findOne({where: {username}});
  }

  async createUser(user: CreateUserDTO) {

    const password = await bcrypt.hash(user.password1, 10)

    const {first_name, last_name, email, username, security_question, security_answer} = user;

    const newUser =  {
      first_name,
      last_name,
      email,
      username,
      password,
      security_question,
      security_answer
    };

    // return newUser;
    return this.userRepository.save(newUser);

  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

}
