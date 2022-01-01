import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
// const config = require('config');

// const PORT = config.get('port') || 5001;
const PORT = process.env.PORT;

async function start() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('MY_FILTER')
    .setDescription('API for "my_filter" app')
    .setVersion('0.0.1')
    .addTag('filter')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, swaggerDocument);
  await app.listen(
    PORT,
    () => console.info(`🚀 App started on port: ${ PORT }`)
  );
}

start().then();
