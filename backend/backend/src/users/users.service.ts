import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
//export type User = any;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, pass, level } = createUserDto;

    //salt é a força do hash
    const salt = await bcrypt.genSalt();

    //gerando hash a partir da senha recebida pelo usuário
    const password = await bcrypt.hash(pass, salt);

    try {
      const query = this.usersRepository.insert({
        email,
        password,
        level,
      });
      return { status: 'registro feito com sucesso' };
    } catch (error) {
      return BadRequestException;
    }
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

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
