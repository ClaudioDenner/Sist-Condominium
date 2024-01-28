import { Test, TestingModule } from '@nestjs/testing';
import { ConciergeController } from './concierge.controller';
import { ConciergeService } from './concierge.service';

describe('ConciergeController', () => {
  let controller: ConciergeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConciergeController],
      providers: [ConciergeService],
    }).compile();

    controller = module.get<ConciergeController>(ConciergeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
