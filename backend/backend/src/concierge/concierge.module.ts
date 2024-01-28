import { Module } from '@nestjs/common';
import { ConciergeService } from './concierge.service';
import { ConciergeController } from './concierge.controller';

@Module({
  controllers: [ConciergeController],
  providers: [ConciergeService],
})
export class ConciergeModule {}
