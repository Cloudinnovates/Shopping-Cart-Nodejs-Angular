export class Product {
    constructor(
        public name: string,
        public category_id: any,
        public marca_id: any,
        public mini_descripcion: any,
        public frase: string,
        public price: number,
        public discount: number,
        public final_price: number,
        public details: string,
        public imagen_portada?: string,
        public slug?: string,
        public created_at?: Date,
        public _id?: Date
    ) {

    }
}
