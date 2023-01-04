import {Car} from "../model/car";
import {read} from "fs";

var readlineSync = require('readline-sync');

export class CarManager {
    listCars: Car[] = [];

    addCars() {
        let brand = readlineSync.question("Choose your brand: ");
        let color = readlineSync.question("Choose your color: ");
        let price = readlineSync.question("Choose your price: ");
        let id = +readlineSync.question("Choose your id: ");
        let car = new Car(brand, color, price, id)
        this.listCars.push(car);
    }

    editCars() {
        let id = +readlineSync.question("Choose your id you want to edit: ");
        while (true) {
            for (let i = 0; i < this.listCars.length; i++) {
                if (id == this.listCars[i].id) {
                    this.listCars[i].brand = readlineSync.question("Edit your brand: ");
                    this.listCars[i].color = readlineSync.question("Edit your color: ");
                    this.listCars[i].price = readlineSync.question("Edit your price: ");
                    return
                }
            }
            console.log('wrong id, enter again')
            id = readlineSync.question("Choose your id you want to edit: ");
        }
    }
    deleteCars(){
        let id = +readlineSync.question("Choose your id you want to delete: ");
        while (true) {
            for (let i = 0; i < this.listCars.length; i++) {
                if (id == this.listCars[i].id) {
                    this.listCars.splice(i, 1)
                    return
                }
            }
            console.log('wrong id, enter again')
            id = +readlineSync.question("Choose your id you want to delete: ");
        }
    }
    displayCars(){
        console.table(this.listCars)
    }

}