import { Test, TestingModule } from '@nestjs/testing';
import { FinancesService } from './finances.service';
import { financesRepositoryEntityMock } from '../testing/finance-repository-mock';

describe('FinancesService', () => {
  let service: FinancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancesService, financesRepositoryEntityMock],
    }).compile();

    service = module.get<FinancesService>(FinancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
