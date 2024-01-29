import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { useRepositoryEntityMock } from '../testing/users-repository-mock';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersListMock } from '../testing/users-list';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, useRepositoryEntityMock, JwtService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('CREATE', () => {
    const registerTest: CreateUserDto = {
      email: 'teste@test.com',
      pass: '123456',
      level: 'user',
    };

    it('method create', async () => {
      const result = await service.create(registerTest);
      expect(result).toEqual({ status: 'registro feito com sucesso' });
    });
  });

  describe('READ', () => {
    it('method read', async () => {
      const result = await service.findAll();
      expect(result).toEqual(UsersListMock);
    });
  });

  describe('UPDATE', () => {
    it('method update', async () => {
      const result = await service.remove(2);
      expect(result).toEqual('This action removes a #2 user');
    });
  });
});
