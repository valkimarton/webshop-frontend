import { Manufacturer } from './Manufacturer';
import { Review } from './Review';

export class Product {
    id: number;
    name: string;
    price: number;
    category: string;
    color: string;
    manufacturer: Manufacturer;
    reviews: Review[];
}
