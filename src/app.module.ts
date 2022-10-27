import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormOptions } from './config/database/typeorm-config';
import { UsersModule } from './models/users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(TypeormOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
