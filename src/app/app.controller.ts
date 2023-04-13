import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ItestConnectionResponse } from './interfaces/app.interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/testConnection')
  testConnection(): ItestConnectionResponse {
    return this.appService.testConnection();
  }
}
