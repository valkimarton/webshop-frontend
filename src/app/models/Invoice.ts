import { Customer } from './Customer';
import { ProductInCart } from './ProductInCart';

export class Invoice {
    id: number;
    customer: Customer;
    products: ProductInCart[];
}