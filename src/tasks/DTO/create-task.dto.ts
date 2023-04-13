import { TaskDto } from '../interfaces/tasks.interfaces';

export class CreateTaskDto implements TaskDto {
  title: string;
  content: string;
}
