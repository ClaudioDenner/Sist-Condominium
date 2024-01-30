import { PartialType } from '@nestjs/mapped-types';
import { CreateConciergeDto } from './create-concierge.dto';

export class UpdateConciergeDto extends PartialType(CreateConciergeDto) {}
