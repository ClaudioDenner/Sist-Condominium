import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersListMock } from './users-list';
import { Information } from '../information/entities/information.entity';

export const informationRepositoryEntityMock = {
  provide: getRepositoryToken(Information),
  useValue: {
    find: jest.fn().mockResolvedValue(UsersListMock),
    findOneBy: jest.fn(),
    insert: jest
      .fn()
      .mockResolvedValue({ status: 'registro feito com sucesso' }),
    delete: jest.fn().mockResolvedValue('This action removes a #2 user'),
  },
};
