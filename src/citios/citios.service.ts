import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateCitioDto, UpdateCitioDto } from './dto/create-citio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Citio } from './entities/citio.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CitiosService {
  constructor(
    @InjectRepository(Citio) private citiosRepository: Repository<Citio>,
  ) {}
  async create(data: CreateCitioDto) {
    const newCitio = this.citiosRepository.create(data);
    return this.citiosRepository.save(newCitio);
  }

  async findAll() {
    return this.citiosRepository.find();
  }

  async findOne(id: number) {
    const cities = await this.citiosRepository.findOne({ where: { id } });
    if (!cities) throw new BadGatewayException('City not found');
    return cities;
  }

  async update(id: number, data: UpdateCitioDto) {
    const citio = await this.findOne(id);
    this.citiosRepository.merge(citio, data);
    return this.citiosRepository.save(citio).catch((error) => {
      throw new BadGatewayException(error.message);
    });
  }

  async remove(id: number) {
    return await this.citiosRepository.delete(id);
  }
}
