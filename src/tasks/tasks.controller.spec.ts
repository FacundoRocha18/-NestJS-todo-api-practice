import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { tasks } from '../data/tasks.json';

describe('AppController', () => {
  let tasksController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksController = app.get<TasksController>(TasksController);
  });

  describe('tests on findAll()', () => {
    const expectedResponse = {
      ok: true || false,
      message: 'Data succesfully fetched' || 'Failed to fetch data',
      data: tasks || [],
    };

    it('should return an object with this fields:\n "ok" (true || false),\n "message" (Data succesfully fetched || Failed to fetch data),\n "data" (tasks.json)', () => {
      expect(tasksController.findAll()).toEqual(expectedResponse);
    });
  });
});
