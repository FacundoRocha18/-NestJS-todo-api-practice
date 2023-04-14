import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { Tasks } from './tasks/tasks.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.kolgvikoebkelawzjwie.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'Kl16z2S1NCZM04EL',
      database: 'postgres',
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
