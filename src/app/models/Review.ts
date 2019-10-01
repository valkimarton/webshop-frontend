import { Customer } from './Customer';
import { Product } from './Product';

export class Review {
    id: number;
    customer: Customer;
    product: Product;
    grade: number;
    content: string;
    date: Date;
}
