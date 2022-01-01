import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// const config = require('config');

// const PORT = config.get('port') || 5001;
const PORT = process.env.PORT;

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(
    PORT,
    () => console.info(`🚀 App started on port: ${ PORT }`)
  );
}
start().then();
