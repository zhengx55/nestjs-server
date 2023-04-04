import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from '../enum/config.enum';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }

  @Post()
  addUser(): any {
    return this.userService.addUser();
  }
}