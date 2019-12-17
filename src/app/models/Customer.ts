import { Address } from './Address';
import { Cart } from './Cart';
import { Role } from './Role';

export class Customer {
    id: number;
    name: string;
    username: string;
    password: string;
    enabled: boolean;
    roles: Role[];
    dateOfBirth: Date;
    gender: string;
    email: string;
    address: Address;
    cartId: number;
    invoiceIds: number[];
}
