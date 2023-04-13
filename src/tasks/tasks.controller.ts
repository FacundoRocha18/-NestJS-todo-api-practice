import { Controller, Get } from '@nestjs/common';
import { IfindAllResponse } from './interfaces/tasks.interfaces';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): IfindAllResponse {
    return this.tasksService.findAll();
  }
}
