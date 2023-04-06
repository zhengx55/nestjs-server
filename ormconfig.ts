import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
export const conncectionParams = {
  type: configService.get(ConfigEnum.DB_TYPE),
  host: configService.get(ConfigEnum.DB_HOST),
  port: configService.get(ConfigEnum.DB_PORT),
  username: configService.get(ConfigEnum.DB_USERNAME),
  password: configService.get(ConfigEnum.DB_PASSWORD),
  database: configService.get(ConfigEnum.DB_DATABASE),
  entities: [User, Profile, Logs, Roles],
  // 同步本地的schema与数据库 -> 初始化的时候去使用
  synchronize: configService.get(ConfigEnum.DB_SYNC),
  // logging: process.env.NODE_ENV === 'development',
} as TypeOrmModuleOptions;
export default new DataSource({
  ...conncectionParams,
  migrations: ['src/migrations/**'],
} as DataSourceOptions);
