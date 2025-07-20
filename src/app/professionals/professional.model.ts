export class Professional {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phone: string,
        public imageUrl: string,
        public specialty: string,
        public group: Professional[] | null
    ) {}
}
