import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../app.module';
import { Tasks } from './tasks.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskDto } from './interfaces/tasks.interfaces';
import { isUUID } from 'class-validator';

describe('TasksController', () => {
  let tasksController: TasksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Tasks]), AppModule],
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    tasksController = app.get<TasksController>(TasksController);
  });

  describe('tests on tasks controller', () => {
    const findOneByExpectedResponse = {
      ok: true || false,
      message: 'Data succesfully fetched' || 'Failed to fetch data',
      data: {
        uuid: 'db71f6af-a160-4ddb-a6c7-1b428b64dd76',
        title: 'New task',
        content: 'This is a task',
        created_at: '2023-04-14T02:44:47.000Z',
      },
    };

    it('should return an object with this fields:\n "ok" (true OR false),\n "message" (Succesfully fetched task data OR Failed to fetch data),\n "data" task object', async () => {
      return expect(
        await tasksController.findOneBy('db71f6af-a160-4ddb-a6c7-1b428b64dd76'),
      ).toEqual(findOneByExpectedResponse);
    });

    const listAllExpectedResponse = {
      ok: true || false,
      message: 'Data succesfully fetched' || 'Failed to fetch data',
      data: [],
    };

    it('should return an object with this fields:\n "ok" (true || false),\n "message" (Data succesfully fetched || Failed to fetch data),\n "data" (tasks array from DB)', async () => {
      return expect(await tasksController.listAll()).toEqual(
        listAllExpectedResponse,
      );
    });

    const createExpectedResponse = {
      ok: true,
      message: 'Created new task',
      createdTaskId: String,
    };

    const newTaskData: TaskDto = {
      title: 'Test',
      content: '1234',
    };

    it('should create a new task and return an object with this fields:\n "ok" (true OR false),\n "message" (Created new task OR Created new task at),\n "createdTaskId" (new task id)', async () => {
      return expect(await tasksController.create(newTaskData)).toEqual(
        createExpectedResponse,
      );
    });
  });
});
