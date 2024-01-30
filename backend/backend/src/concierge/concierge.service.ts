import { Injectable } from '@nestjs/common';
import { CreateConciergeDto } from './dto/create-concierge.dto';
import { UpdateConciergeDto } from './dto/update-concierge.dto';

@Injectable()
export class ConciergeService {
  create(createConciergeDto: CreateConciergeDto) {
    return 'This action adds a new concierge';
  }

  findAll() {
    return `This action returns all concierge`;
  }

  findOne(id: number) {
    return `This action returns a #${id} concierge`;
  }

  update(id: number, updateConciergeDto: UpdateConciergeDto) {
    return `This action updates a #${id} concierge`;
  }

  remove(id: number) {
    return `This action removes a #${id} concierge`;
  }
}
