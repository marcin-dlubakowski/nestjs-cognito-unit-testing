import { Test, TestingModule } from '@nestjs/testing';
import { QweasdController } from './qweasd.controller';
import { AuthorizationGuard } from '@nestjs-cognito/auth';

describe('QweasdController', () => {
  let controller: QweasdController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QweasdController],
    })
      .overrideGuard(AuthorizationGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = app.get<QweasdController>(QweasdController);
  });

  describe('/qweasd', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe('Hello World!');
    });
  });
});
