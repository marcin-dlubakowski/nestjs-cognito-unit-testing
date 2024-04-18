import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CognitoAuthModule } from '@nestjs-cognito/auth';
import { QweasdModule } from './qweasd/qweasd.module';

@Module({
  imports: [
    QweasdModule,
    CognitoAuthModule.register({
      jwtVerifier: {
        userPoolId: 'user_pool_id',
        clientId: 'client_id',
        tokenUse: 'id',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
