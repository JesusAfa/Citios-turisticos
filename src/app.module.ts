import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CitiosModule } from './citios/citios.module';
import { AuthModule } from './auth/auth.module';
import { enviroments } from 'enviroments';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import * as Joi from 'joi';
import config from './config/config';
@Module({
  imports: [
    CitiosModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UsersModule,
    DatabaseModule,
    AuthModule,
  ],
})
export class AppModule {}
