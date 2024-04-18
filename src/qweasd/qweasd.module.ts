import { Module } from '@nestjs/common';
import { QweasdController } from './qweasd.controller';

@Module({
  imports: [],
  controllers: [QweasdController],
  providers: [],
})
export class QweasdModule {}
