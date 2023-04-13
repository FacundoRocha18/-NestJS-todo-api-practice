export interface Itask {
  uuid: string;
  title: string;
  content: string;
}

export type TaskDto = Omit<'uuid'>;

export interface IfindAllResponse {
  ok: boolean;
  message: string;
  data: Itask[];
}
