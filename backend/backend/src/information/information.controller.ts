import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { InformationService } from './information.service';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
@UseGuards(AuthGuard, RolesGuard)
@Roles(Role.Admin)
@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Post()
  create(@Body() createInformationDto: CreateInformationDto, @Req() request) {
    const id = request.user.id;
    return this.informationService.create(createInformationDto, id);
  }

  @Roles(Role.User)
  @Get()
  findAll() {
    return this.informationService.findAll();
  }

  @Get('admin')
  findAllAdmin() {
    return this.informationService.findAll();
  }

  @Roles(Role.User)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informationService.findOne(+id);
  }

  @Get('admin/:id')
  async findOneAdmin(@Param('id') id: string) {
    return this.informationService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInformationDto: UpdateInformationDto,
  ) {
    return this.informationService.update(+id, updateInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informationService.remove(+id);
  }
}
