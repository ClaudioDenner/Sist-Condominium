import { Injectable } from '@nestjs/common';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Finance } from './entities/finance.entity';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(Finance) private financeRepository: Repository<Finance>,
  ) {}
  create(createFinanceDto: CreateFinanceDto) {
    return 'This action adds a new finance';
  }

  async findAll(id: number) {
    try {
      const query = await this.financeRepository.find({
        order: { id: 'desc' },
        where: { user: id },
      });

      return query;
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} finance`;
  }

  update(id: number, updateFinanceDto: UpdateFinanceDto) {
    return `This action updates a #${id} finance`;
  }

  remove(id: number) {
    return `This action removes a #${id} finance`;
  }
}
