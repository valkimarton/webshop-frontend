import { Product } from './Product';
import { Cart } from './Cart';
import { Invoice } from './Invoice';

export class ProductInCart {
    id: number;
    productId: number;
    productName: string;
    numberOfProducts: number;
    purchasePrice: number;
    cartId: number;
    invoiceId: number;

    constructor(
        productId: number,
        numberOfProducts: number,
        purchasePrice: number,
        cartId: number,
        invoiceId: number
    ) {
        this.productId = productId;
        this.numberOfProducts = numberOfProducts;
        this.purchasePrice = purchasePrice;
        this.cartId = cartId;
        this.invoiceId = invoiceId;
        }
}
