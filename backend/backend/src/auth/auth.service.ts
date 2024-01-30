import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    console.log(user);
    const compare = await bcrypt.compare(pass, user.password);

    if (!compare) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;

    return this.createToken(result);
  }

  async createToken(payload) {
    const { id, email, level } = payload;
    try {
      const token = this.jwtService.sign({
        id,
        email,
        roles: level,
      });
      return token;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return 'get';
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
