import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  uuid: UUID;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column('timestamptz', { default: 'now' })
  created_at: Timestamp;
}
