import { Product } from './Product';
import { Cart } from './Cart';
import { Invoice } from './Invoice';

export class ProductInCart {
    id: number;
    product: Product;
    numberOfProducts: number;
    purchasePrice: number;
    cart: Cart;
    invoice: Invoice;

    constructor(
        product: Product,
        numberOfProducts: number,
        purchasePrice: number,
        cart: Cart,
        invoice: Invoice
    ) {
        this.product = product;
        this.numberOfProducts = numberOfProducts;
        this.purchasePrice = purchasePrice;
        this.cart = cart;
        this.invoice = invoice;
        }
}
