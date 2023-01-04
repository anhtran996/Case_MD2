"use strict";
exports.__esModule = true;
exports.AccountManager = void 0;
var account_1 = require("../model/account");
var readlineSync = require('readline-sync');
var admin = new account_1.Account("ngocanhbeo", "ngocanhbeo", 0);
var admin1 = new account_1.Account("ngocanhbeo1", "ngocanhbeo1", 0);
var AccountManager = /** @class */ (function () {
    function AccountManager() {
        this.listAccounts = [admin, admin1];
        this.isLoop = true;
    }
    AccountManager.prototype.registerAccount = function () {
        var username;
        var isLoop = false;
        do {
            isLoop = false;
            username = readlineSync.question("Enter username: ");
            for (var _i = 0, _a = this.listAccounts; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.username === username) {
                    console.log("Username existed, please try again");
                    isLoop = true;
                }
            }
        } while (isLoop);
        var password = readlineSync.question("enter password: ");
        var role = 1;
        var user = new account_1.Account(username, password, role);
        this.listAccounts.push(user);
    };
    AccountManager.prototype.loginAccount = function () {
        var username = readlineSync.question("enter username: ");
        var password = readlineSync.question("enter password: ");
        for (var i = 0; i < this.listAccounts.length; i++) {
            if (this.listAccounts[i].username === username && this.listAccounts[i].password === password) {
                console.log('login successfully');
                this.isLoop = false;
                return;
            }
        }
        console.log('wrong password or username, please try again');
    };
    return AccountManager;
}());
exports.AccountManager = AccountManager;
