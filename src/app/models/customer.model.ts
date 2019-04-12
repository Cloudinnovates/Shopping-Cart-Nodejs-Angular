export class Customer {
    constructor(
        public name: string,
        public lastname: string,
        public dni: string,
        public country_id: any,
        public email: string,
        public city: string,
        public password: string,
        public telefono: string,
        public created_at?: Date,
        public _id?: string
    ) {

    }
}
