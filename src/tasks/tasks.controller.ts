import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { UUID } from 'crypto';
import { IfindAllResponse } from './interfaces/tasks.interfaces';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('/find')
  async findOneBy(@Query('id') uuid: UUID) {
    console.log(uuid);
    const task = await this.tasksService.findOneBy(uuid);

    if (!task) {
      throw new NotFoundException('No se encontró la tarea');
    }

    return {
      ok: true,
      message: 'Succesfully fetched task data',
      data: task,
    };
  }

  @Get('/list')
  async listAll(): Promise<IfindAllResponse> {
    return {
      ok: true,
      message: 'Data succesfully fetched',
      data: await this.tasksService.listAll(),
    };
  }
}
