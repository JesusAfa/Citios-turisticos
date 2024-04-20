import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('API')
  .setDescription(
    'Documentacion de la api de pedidos aqui se describira todas las peticiones que se pueden hacer y con que acceso',
  )
  .setVersion('1.0')
  .addTag('orders')
  .build();
