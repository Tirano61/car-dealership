import { IsString, isString } from "class-validator";


//! Los DTO (Data Transfer Object) siempre son calses 
export class CreateCarDto {
    
    @IsString()
    readonly brand: string;
    @IsString()
    readonly model: string;

}