import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';



@Controller('cars')
//* @UsePipes( ValidationPipe ) validación a nivel de Controlador
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get(':id')
    getCarById( @Param( 'id', new ParseUUIDPipe({version: '5'}) ) id: string){
        return {
            car: this.carsService.findOneById( id ),
        };
    }

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Post()
    //* @UsePipes( ValidationPipe ) Validación a nivel de función
    createCar( @Body() createCarDto: CreateCarDto ){
        
        return this.carsService.create( createCarDto );
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto ){

        return this.carsService.update(id, updateCarDto);
        
    }
    
    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: number){
        return {
            method: 'Delete',
            id
        };
    }
}
