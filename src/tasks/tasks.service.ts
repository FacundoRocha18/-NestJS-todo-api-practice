import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IcreateResponse } from './interfaces/tasks.interfaces';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  findAll(): Promise<Tasks[]> {
    return this.tasksRepository.find();
  }

  create(): IcreateResponse {
    let createdTaskResponse;
    try {
      createdTaskResponse = this.tasksRepository.create();
    } catch (error) {
      console.log(error);
    }

    return {
      ok: true,
      message: 'Created new task',
      createdTaskId: createdTaskResponse?.uuid,
    };
  }
}
