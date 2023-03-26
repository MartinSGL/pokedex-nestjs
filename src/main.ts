import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
      transform:true, // transform the data to desired form 
      //in this case was used to transform the data for pagination
      transformOptions:{
        enableImplicitConversion:true
      }
    }),
  )

  app.setGlobalPrefix('api/v2')
  
  await app.listen(process.env.PORT);
  console.log(`app runing on PORT ${process.env.PORT} `)
}
main();
