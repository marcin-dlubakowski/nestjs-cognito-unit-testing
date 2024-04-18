import { Test, TestingModule } from '@nestjs/testing';
import { QweasdController } from './qweasd.controller';
import { AuthorizationGuard, CognitoAuthModule } from '@nestjs-cognito/auth';

describe('QweasdController', () => {
  let controller: QweasdController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QweasdController],
      imports: [
        CognitoAuthModule.register({
          jwtVerifier: {
            userPoolId: 'eu-west-1_123456789',
            clientId: '123456789',
            tokenUse: 'id',
          },
        }),
      ],
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
