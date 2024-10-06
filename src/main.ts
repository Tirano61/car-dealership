import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function main() {
  const app = await NestFactory.create( AppModule );
  //! Validación a nivel global en base a los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    }),
  )

  await app.listen(3000);
}
main();
