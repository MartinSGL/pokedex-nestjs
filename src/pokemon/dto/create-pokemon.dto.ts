import { IsInt, IsNotEmpty, Min } from "class-validator"

export class CreatePokemonDto {
    
    @IsInt()
    @Min(1)
    no: number

    @IsNotEmpty()
    name:string

}
