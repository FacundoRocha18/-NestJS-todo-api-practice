import { UUID } from 'crypto';
import { Timestamp } from 'typeorm';
import { Tasks } from '../task.entity';

export interface Itask {
  uuid: UUID;
  title: string;
  content: string;
  created_at: Timestamp;
}

export type TaskDto = Omit<Itask, 'uuid', 'created_at'>;

export interface IResponse {
  ok: boolean;
  message: string;
}

export interface IfindOneByIdResponse extends IResponse {
  data: Itask;
}

export interface IfindAllResponse extends IResponse {
  data: Itask[];
}

export interface IcreateResponse extends IResponse {
  createdTaskId: UUID | undefined;
}
