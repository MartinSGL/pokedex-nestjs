import { join } from 'path'
import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { MongooseModule } from '@nestjs/mongoose'
import { PokemonModule } from './pokemon/pokemon.module'
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config'
import { EnvConfiguration } from './config/app.config'
import { JoiValidationSchema } from './config/joi.validation'

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }), // to show a static page in the root

    //conection to mongoDB using nest mongoose
    MongooseModule.forRoot(process.env.MONGODB),
    /** other modules to export in app */
    PokemonModule,

    CommonModule,

    SeedModule
  ],
})
export class AppModule {}
