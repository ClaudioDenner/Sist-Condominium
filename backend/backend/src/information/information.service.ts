import { Injectable } from '@nestjs/common';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Information } from './entities/information.entity';
@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private informationRepository: Repository<Information>,
  ) {}
  async create(createInformationDto: CreateInformationDto, id) {
    const { title, body, date } = createInformationDto;
    try {
      const query = await this.informationRepository
        .createQueryBuilder()
        .insert()
        .into(Information)
        .values({ title, body, date, user: id })
        .execute();
      return query;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findAll() {
    try {
      const query = await this.informationRepository.find({
        order: { id: 'desc' },
      });

      return query;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const query = await this.informationRepository.find({
        where: { id },
        order: { id: 'desc' },
      });
      return query;
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateInformationDto: UpdateInformationDto) {
    const { body, title, date } = updateInformationDto;
    try {
      const query = this.informationRepository
        .createQueryBuilder()
        .update(Information)
        .set({ body, title, date })
        .where('id = :id', { id })
        .execute();
      return { query };
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    try {
      const query = this.informationRepository
        .createQueryBuilder()
        .delete()
        .from(Information)
        .where('id = :id', { id })
        .execute();
      return { query };
    } catch (error) {
      return error;
    }
  }
}
