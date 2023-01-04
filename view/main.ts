var readlineSync = require('readline-sync');
import {CarManager} from "../controller/carManager";
import {AccountManager} from "../controller/accountManager";

let carmanager = new CarManager
let accountManager = new AccountManager
while (true) {
    accountManager.isLoop = true
    while (accountManager.isLoop) {
        console.log(`1. Register
2. Login`)
        let choice = +readlineSync.question("enter your choice: ");
        switch (choice) {
            case 1:
                accountManager.registerAccount()
                break;
            case 2:
                accountManager.loginAccount()
                break;
        }
    }
    let check = true;
    while (check) {
        console.log(`
1. display
2. Add
3. Edit
4. Delete
5. Exit
`)

        let choice = +readlineSync.question("enter your choice: ");
        if(choice>5 || choice < 0) {console.log('-1')}
        switch (choice) {
            case 1:
                carmanager.displayCars()
                break
            case 2:
                carmanager.addCars();
                break
            case 3:
                carmanager.editCars();
                break
            case 4:
                carmanager.deleteCars();
                break;
            case 5:
                check = false;
                break;

        }
    }
}