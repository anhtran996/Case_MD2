"use strict";
exports.__esModule = true;
var readlineSync = require('readline-sync');
var carManager_1 = require("../controller/carManager");
var accountManager_1 = require("../controller/accountManager");
var carmanager = new carManager_1.CarManager;
var accountManager = new accountManager_1.AccountManager;
while (true) {
    accountManager.isLoop = true;
    while (accountManager.isLoop) {
        console.log("1. Register\n2. Login");
        var choice = +readlineSync.question("enter your choice: ");
        switch (choice) {
            case 1:
                accountManager.registerAccount();
                break;
            case 2:
                accountManager.loginAccount();
                break;
        }
    }
    var check = true;
    while (check) {
        console.log("\n1. display\n2. Add\n3. Edit\n4. Delete\n5. Exit\n");
        var choice = +readlineSync.question("enter your choice: ");
        if (choice > 5 || choice < 0) {
            console.log('-1');
        }
        switch (choice) {
            case 1:
                carmanager.displayCars();
                break;
            case 2:
                carmanager.addCars();
                break;
            case 3:
                carmanager.editCars();
                break;
            case 4:
                carmanager.deleteCars();
                break;
            case 5:
                check = false;
                break;
        }
    }
}
