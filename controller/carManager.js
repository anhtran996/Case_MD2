"use strict";
exports.__esModule = true;
exports.CarManager = void 0;
var car_1 = require("../model/car");
var readlineSync = require('readline-sync');
var CarManager = /** @class */ (function () {
    function CarManager() {
        this.listCars = [];
    }
    CarManager.prototype.addCars = function () {
        var brand = readlineSync.question("Choose your brand: ");
        var color = readlineSync.question("Choose your color: ");
        var price = readlineSync.question("Choose your price: ");
        var id = +readlineSync.question("Choose your id: ");
        var car = new car_1.Car(brand, color, price, id);
        this.listCars.push(car);
    };
    CarManager.prototype.editCars = function () {
        var id = +readlineSync.question("Choose your id you want to edit: ");
        while (true) {
            for (var i = 0; i < this.listCars.length; i++) {
                if (id == this.listCars[i].id) {
                    this.listCars[i].brand = readlineSync.question("Edit your brand: ");
                    this.listCars[i].color = readlineSync.question("Edit your color: ");
                    this.listCars[i].price = readlineSync.question("Edit your price: ");
                    return;
                }
            }
            console.log('wrong id, enter again');
            id = readlineSync.question("Choose your id you want to edit: ");
        }
    };
    CarManager.prototype.deleteCars = function () {
        var id = +readlineSync.question("Choose your id you want to delete: ");
        while (true) {
            for (var i = 0; i < this.listCars.length; i++) {
                if (id == this.listCars[i].id) {
                    this.listCars.splice(i, 1);
                    return;
                }
            }
            console.log('wrong id, enter again');
            id = +readlineSync.question("Choose your id you want to delete: ");
        }
    };
    CarManager.prototype.displayCars = function () {
        console.table(this.listCars);
    };
    return CarManager;
}());
exports.CarManager = CarManager;
