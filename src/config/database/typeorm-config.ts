import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

const configService = new ConfigService();
config();

export const TypeormOptions: DataSourceOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  logging: true,
  synchronize: false,
  entities: [__dirname + '/../../models/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../database/migrations/**/*{.js,.ts}'],
};
