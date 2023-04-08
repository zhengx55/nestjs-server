import { LoggerService } from '@nestjs/common';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private logger: LoggerService) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    // 获取上下文
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const statusCode = exception.getStatus();
    this.logger.error(exception.message, exception.stack);
    response.status(statusCode).json({
      code: statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      msg: exception.message || exception.name,
    });
  }
}
