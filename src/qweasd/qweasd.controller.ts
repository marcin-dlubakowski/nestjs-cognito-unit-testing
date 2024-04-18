import { AuthorizationGuard } from '@nestjs-cognito/auth';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('/qweasd')
export class QweasdController {
  @Get()
  @UseGuards(AuthorizationGuard({}))
  getHello(): string {
    return 'Hello World!';
  }
}
