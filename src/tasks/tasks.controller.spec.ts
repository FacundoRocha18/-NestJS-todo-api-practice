import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../app.module';
import { Tasks } from './tasks.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('AppController', () => {
  let tasksController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Tasks]), AppModule],
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksController = app.get<TasksController>(TasksController);
  });

  describe('tests on findAll()', () => {
    const expectedResponse = {
      ok: true || false,
      message: 'Data succesfully fetched' || 'Failed to fetch data',
      data: [],
    };

    it('should return an object with this fields:\n "ok" (true || false),\n "message" (Data succesfully fetched || Failed to fetch data),\n "data" (tasks array from DB)', () => {
      return tasksController.findAll().then((response) => {
        expect(response).toBe(expectedResponse);
      });
    });
  });
});
