import { Customer } from './Customer';
import { ProductInCart } from './ProductInCart';

export class Invoice {
    id: number;
    customerId: number;
    productInCartIds: number[];
}