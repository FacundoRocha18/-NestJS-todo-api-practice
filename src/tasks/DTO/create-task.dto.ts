import { TaskDto } from '../interfaces/tasks.interfaces';
import { IsString } from 'class-validator';

export class CreateTaskDto implements TaskDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
