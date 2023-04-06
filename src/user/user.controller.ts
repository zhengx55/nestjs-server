import { Controller, Get, Logger, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  private logger = new Logger('用户模块');
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {
    this.logger.log('UserController initialized');
  }

  @Get()
  getUsers(): any {
    this.logger.log('请求getUser成功');
  }

  @Post()
  addUser(): any {
    this.logger.log('addUser请求成功');
  }
}
