/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { Tasks } from './tasks/tasks.entity';
import { TasksModule } from './tasks/tasks.module';
const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
      database: process.env.DATABASE,
      entities: [Tasks],
      synchronize: true, // Don't use synchronize: true on production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
