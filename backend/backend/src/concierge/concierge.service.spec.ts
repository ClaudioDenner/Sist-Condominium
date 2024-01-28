import { Test, TestingModule } from '@nestjs/testing';
import { ConciergeService } from './concierge.service';

describe('ConciergeService', () => {
  let service: ConciergeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConciergeService],
    }).compile();

    service = module.get<ConciergeService>(ConciergeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
