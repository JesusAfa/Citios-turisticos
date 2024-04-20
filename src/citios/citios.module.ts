import { Module } from '@nestjs/common';
import { CitiosService } from './citios.service';
import { CitiosController } from './citios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citio } from './entities/citio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Citio])],
  controllers: [CitiosController],
  providers: [CitiosService],
})
export class CitiosModule {}
