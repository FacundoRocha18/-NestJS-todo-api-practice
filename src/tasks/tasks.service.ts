import { Injectable } from '@nestjs/common';
import { IfindAllResponse } from './interfaces/tasks.interfaces';
import { tasks } from '../data/tasks.json';

@Injectable()
export class TasksService {
  findAll(): IfindAllResponse {
    return {
      ok: true,
      message: 'Data succesfully fetched',
      data: tasks,
    };
  }
}
