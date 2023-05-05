import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UUID } from 'crypto';
import { CreateTaskDto } from './DTO/create-task.dto';
import {
  IcreateResponse,
  IfindAllResponse,
} from './interfaces/tasks.interfaces';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('/find')
  async findOneBy(@Query('id') uuid: UUID) {
    const task = await this.tasksService.findOneBy(uuid);

    if (!task) {
      throw new NotFoundException(`Cannot find task id: ${uuid}`);
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

  @Post('/create')
  async create(@Body() body: CreateTaskDto): Promise<IcreateResponse> {
    const createdTaskResponse = await this.tasksService.create(body);

    return {
      ok: true,
      message: 'Created new task',
      createdTaskId: createdTaskResponse?.uuid,
    };
  }

  @Put('/edit')
  async edit(@Body() body: CreateTaskDto, @Query('id') uuid: UUID) {
    const task = await this.tasksService.findOneBy(uuid);

    if (!task) {
      throw new NotFoundException('Cannot find task');
    }
  }

  @Delete('/delete')
  async delete(@Query('id') uuid: UUID) {
    const task = await this.tasksService.findOneBy(uuid);

    if (!task) {
      throw new NotFoundException(`Cannot find task id: ${uuid}`);
    }

    const result = await this.tasksService.delete(uuid);

    return {
      ok: true,
      message: 'Succesfully deleted task',
      deletedTaskId: uuid,
      rowsAffected: result.affected,
    };
  }
}
