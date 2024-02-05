import { Test, TestingModule } from '@nestjs/testing';
import { FinancesController } from './finances.controller';
import { FinancesService } from './finances.service';

describe('FinancesController', () => {
  let controller: FinancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancesController],
      providers: [FinancesService],
    }).compile();

    controller = module.get<FinancesController>(FinancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
