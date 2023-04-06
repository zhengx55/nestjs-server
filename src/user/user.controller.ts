import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { User } from './user.entity';

export interface getUserDto {
  page: number;
  limit?: number;
  username?: string;
  role?: number;
  gender?: number;
}
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private logger: Logger,
  ) {
    this.logger.log('UserController initialized');
  }

  @Get()
  getUsers(@Query() query: getUserDto): any {
    // page count, limit, condition, sort
    return this.userService.findAll(query);
  }

  @Post()
  addUser(@Body() dto: any): any {
    const user = dto as User;
    console.log(
      '🚀 ~ file: user.controller.ts:26 ~ UserController ~ addUser ~ user:',
      user,
    );
    return this.userService.create(user);
  }

  @Patch('/:id')
  updateUser(@Body() dto: any, @Param('id') id: number): any {
    const user = dto as User;
    return this.userService.update(id, user);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number): any {
    return this.userService.remove(id);
  }
}
