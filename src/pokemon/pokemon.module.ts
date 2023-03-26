import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  //to import a module which is no injectable or part of the providers
  imports:[
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Pokemon.name, //name extended of document entity
        schema: PokemonSchema //pokemonSchema
      }
  ])
  ],
  exports:[MongooseModule] // this is optional in case you want to use the service instead of the entity
})
export class PokemonModule {}
