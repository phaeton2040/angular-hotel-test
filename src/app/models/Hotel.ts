
export class Hotel {
    public name: string;
    public stars: number;
    public price: number;
    public image: string;

    constructor(source) {
        this.name = source.name;
        this.stars = source.stars;
        this.price = source.price;
        this.image = source.image;
    }
}
