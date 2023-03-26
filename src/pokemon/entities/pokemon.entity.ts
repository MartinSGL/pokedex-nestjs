import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema() //used to set the class as a DB schema
//used to make a model for collection in data base
export class Pokemon extends Document{
    @Prop({
        unique:true,
        index:true
    })
    name:string

    @Prop({
        unique:true,
        index:true
    })
    no:number
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon )
