import { Test, TestingModule } from '@nestjs/testing';
import { FinancesController } from './finances.controller';
import { FinancesService } from './finances.service';
import { AuthGuard } from '../auth/auth.guard';
import { financesRepositoryEntityMock } from '../testing/finance-repository-mock';

describe('FinancesController', () => {
  let controller: FinancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancesController],
      providers: [FinancesService, financesRepositoryEntityMock],
    })
      .overrideGuard(AuthGuard)
      .useValue({
        canActive: jest.fn(() => true),
      })
      .compile();

    controller = module.get<FinancesController>(FinancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
