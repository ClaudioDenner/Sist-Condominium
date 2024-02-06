import { Test, TestingModule } from '@nestjs/testing';
import { InformationService } from './information.service';
import { informationRepositoryEntityMock } from '../testing/informations-repository-mock';

describe('InformationService', () => {
  let service: InformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InformationService, informationRepositoryEntityMock],
    }).compile();

    service = module.get<InformationService>(InformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
