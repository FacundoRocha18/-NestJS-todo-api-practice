import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('tests on testConnection()', () => {
    const expectedResponse = {
      running: true || null,
      message: 'API running correctly' || null,
    };

    it(`should return and object with a running status and a message`, () => {
      expect(appController.testConnection()).toEqual(expectedResponse);
    });
  });
});
