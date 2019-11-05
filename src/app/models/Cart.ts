import { Customer } from './Customer';
import { ProductInCart } from './ProductInCart';
export class Cart {
    id: number;
    customer: Customer;
    products: ProductInCart[];

}
