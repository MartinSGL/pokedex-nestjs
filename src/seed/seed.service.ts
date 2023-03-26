import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-responses.interfaces';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name ) //
    private readonly pokemonModel: Model<Pokemon>,// Pokemon is the class with it's rules
    private readonly http:AxiosAdapter
  ){}


  async executeSeed(){

    await this.pokemonModel.deleteMany({})

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    const insertData = []

    data.results.forEach(({name,url})=>{
      const segments = url.split('/')
      const no:number = +segments[segments.length - 2]
      insertData.push({name,no})
    })

    const resp = await this.pokemonModel.insertMany(insertData)

    return resp
  }
}
