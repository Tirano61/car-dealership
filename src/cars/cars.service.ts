import { Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];
    
    findAll() {
        return this.cars;
    };

    findOneById( id: string ) {
        
        const car =  this.cars.find( car => car.id === id);

        if( !car ) throw new NotFoundException(`Car with id '${id}' not found`);
        
        return car;
    };

    create( createCarDto: CreateCarDto){
        //! Esto o el siguiente son lo mismo
        /* const car: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        } */
        const car: Car = {
            id: uuid(),
            ...createCarDto,
        }
        this.cars.push(car);

        return car;
    }

    update( id: string, updateCarDto: UpdateCarDto ){
        
        let carDB = this.findOneById(id);
        
        this.cars = this.cars.map(car =>{
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
            }
            return car;
        });
        return carDB;
    }
}
