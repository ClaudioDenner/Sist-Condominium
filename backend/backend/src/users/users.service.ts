import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import * as bcrypt from 'bcrypt';
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
  async create(createUserDto: CreateUserDto) {
    const { email, pass } = createUserDto;

    //salt é a força do hash
    const salt = await bcrypt.genSalt();

    //gerando hash a partir da senha recebida pelo usuário
    const password = await bcrypt.hash(pass, salt);

    this.usersRepository
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({ email, password })
      .execute();
  }
  findAll() {
    return this.usersRepository.find();
  }

  async findOne(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
