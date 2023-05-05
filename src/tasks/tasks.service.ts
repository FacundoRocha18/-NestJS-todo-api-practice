import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateTaskDto } from './DTO/create-task.dto';
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

  create(body: CreateTaskDto): Promise<Tasks> {
    const task = this.tasksRepository.create(body);
    return this.tasksRepository.save(task);
  }

  delete(uuid: UUID): Promise<DeleteResult> {
    return this.tasksRepository.delete({ uuid });
  }
}
