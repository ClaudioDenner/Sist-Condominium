import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from '../users/entities/users.entity';
import { UsersListMock } from './users-list';

export const useRepositoryEntityMock = {
  provide: getRepositoryToken(Users),
  useValue: {
    find: jest.fn().mockResolvedValue(UsersListMock),
    findOneBy: jest.fn(),
    insert: jest
      .fn()
      .mockResolvedValue({ status: 'registro feito com sucesso' }),
    delete: jest.fn().mockResolvedValue('This action removes a #2 user'),
  },
};
