import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CitiosService } from './citios.service';
import { CreateCitioDto, UpdateCitioDto } from './dto/create-citio.dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { ApiTags } from '@nestjs/swagger';

ApiTags('citios');
@UseGuards(ApiKeyGuard, JwtAuthGuard, RolesGuard)
@Controller('citios')
export class CitiosController {
  constructor(private readonly citiosService: CitiosService) {}

  @Post()
  async create(@Body() createCitioDto: CreateCitioDto) {
    return await this.citiosService.create(createCitioDto);
  }

  @Roles(Role.ADMIN)
  @Get()
  findAll() {
    return this.citiosService.findAll();
  }

  @Roles(Role.ADMIN)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.citiosService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCitioDto: UpdateCitioDto,
  ) {
    return await this.citiosService.update(id, updateCitioDto);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.citiosService.remove(id);
  }
}
