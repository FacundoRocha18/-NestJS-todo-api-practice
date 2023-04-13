import { Injectable } from '@nestjs/common';
import { ItestConnectionResponse } from './interfaces/app.interfaces';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  testConnection(): ItestConnectionResponse {
    return {
      running: true,
      message: 'API running correctly',
    };
  }
}
