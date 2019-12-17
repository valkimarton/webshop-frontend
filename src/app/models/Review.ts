import { Customer } from './Customer';
import { Product } from './Product';

export class Review {
    id: number;
    customerId: number;
    customerName: string;
    productId: number;
    grade: number;
    content: string;
    date: Date;
}
