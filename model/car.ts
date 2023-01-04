export class Car{
    id: number;
    brand: string;
    color: string;
    price: number;
    constructor(brand: string, color: string, price: number, id: number) {
       this.brand = brand;
       this.color = color;
       this.price = price;
       this.id = id;
    }

}