import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { IcreateResponse } from './interfaces/tasks.interfaces';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  findOneBy(uuid: UUID): Promise<Tasks | null> {
    return this.tasksRepository.findOneBy({ uuid });
  }

  listAll(): Promise<Tasks[]> {
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
