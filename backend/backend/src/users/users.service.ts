import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
//export type User = any;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}
  /*
  private readonly users = [
    {
      userId: 1,
      email: 'claudiodenner2@gmail.com',
      password: '125abcS@',
    },

    {
      userId: 2,
      email: 'maria',
      password: 'guess',
    },
  ];
  */
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  findAll() {
    return this.usersRepository.find();
  }

  async findOne(email: string) {
    //return this.users.find((user) => user.email === email);
    return this.usersRepository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
