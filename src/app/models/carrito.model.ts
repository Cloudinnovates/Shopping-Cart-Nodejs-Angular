import { Product } from './producto.model';

export class Carrito {
    constructor(
        public customer_id: string,
        public products: Product[],
        public total: number,
        public created_at?: Date,
        public estado?: string
    ) {

    }
}
