import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {

  constructor(private userService: UsersService) {
  }

  @Post()
  create(@Body() userDto: createUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

}
