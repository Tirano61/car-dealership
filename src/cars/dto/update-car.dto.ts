import { IsOptional, IsString, isString, IsUUID } from "class-validator";


//! Los DTO (Data Transfer Object) siempre son calses 
export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @IsOptional()
    readonly model?: string;

}