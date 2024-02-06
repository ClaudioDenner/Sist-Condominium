import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersListMock } from './users-list';
import { Finance } from '../finances/entities/finance.entity';
export const financesRepositoryEntityMock = {
  provide: getRepositoryToken(Finance),
  useValue: {
    find: jest.fn().mockResolvedValue(UsersListMock),
    findOneBy: jest.fn(),
    insert: jest
      .fn()
      .mockResolvedValue({ status: 'registro feito com sucesso' }),
    delete: jest.fn().mockResolvedValue('This action removes a #2 user'),
  },
};
