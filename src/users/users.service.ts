import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createUserDto } from './dto/createUser.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: createUserDto) {
    return await this.userRepository.create(dto);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
