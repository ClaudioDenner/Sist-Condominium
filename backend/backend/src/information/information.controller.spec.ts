import { Test, TestingModule } from '@nestjs/testing';
import { InformationController } from './information.controller';
import { InformationService } from './information.service';
import { AuthGuard } from '../auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { informationRepositoryEntityMock } from '../testing/informations-repository-mock';

describe('InformationController', () => {
  let controller: InformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformationController],
      providers: [
        InformationService,
        JwtService,
        informationRepositoryEntityMock,
      ],
    })
      .overrideGuard(AuthGuard)
      .useValue({
        canActive: jest.fn(() => true),
      })
      .compile();

    controller = module.get<InformationController>(InformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
