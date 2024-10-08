import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';



export const BRAND_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Corolla',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Civic',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Cherokee',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Tesla',
        createAt: new Date().getTime()
    },
]