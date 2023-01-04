import {Account} from "../model/account";

var readlineSync = require('readline-sync');
let admin = new Account("ngocanhbeo", "ngocanhbeo", 0)
let admin1 = new Account("ngocanhbeo1", "ngocanhbeo1", 0)

export class AccountManager {
    listAccounts: Account[] = [admin, admin1];
    isLoop: boolean = true;

    registerAccount() {
        let username
        let isLoop = false
        do {
            isLoop = false
            username = readlineSync.question("Enter username: ")
            for (let i of this.listAccounts) {
                if (i.username === username) {
                    console.log("Username existed, please try again")
                    isLoop = true
                }
            }
        } while (isLoop)
        let password = readlineSync.question("enter password: ");
        let role = 1;

        let user = new Account(username, password, role)
        this.listAccounts.push(user);
    }

    loginAccount() {
        let username = readlineSync.question("enter username: ");
        let password = readlineSync.question("enter password: ");
        for (let i = 0; i < this.listAccounts.length; i++) {
            if (this.listAccounts[i].username === username && this.listAccounts[i].password === password) {
                console.log('login successfully')
                this.isLoop = false
                return
            }
        }
        console.log('wrong password or username, please try again');
    }

}