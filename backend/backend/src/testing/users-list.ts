import { Users } from '../users/entities/users.entity';

export const UsersListMock: Users[] = [
  {
    id: 1,
    email: 'admin@condominio.com',
    password: '$2b$10$2vqQpiN1Lmuj2nnS02ET3u9rI/Bjzc0idawe24djnouuLD36hDbYq',
    level: 'admin',
  },
  {
    id: 2,
    email: 'user@condominio.com',
    password: '$2b$10$2JQVMT4GtfACEHUmU/qpL.dBj5nn.n4xm1Wb3FYUTeEAUhkhlUXo.',
    level: 'user',
  },
];
