import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthRepositoryMock } from '../testing/auth-repository-mock';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService, UsersService, AuthRepositoryMock],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Testing Method', () => {
    it('Method SingIn', async () => {
      const emailFake = 'teste@test.com';
      const passFake = '123456';
      const result = service.signIn(emailFake, passFake);
      expect(result).toEqual('bau');
    });
  });
});
