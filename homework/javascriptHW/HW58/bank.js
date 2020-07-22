(function () {
    'use strict';

    function performTransaction(transAmount) {
        this.balance += transAmount;
    }
    
    function createAcct  () {
        return {
            balance: 0,
            performTransaction: function (transAmount) {
                this.balance += transAmount;
            }
        };
    }

    const acct1 = createAcct();
    const acct2 = createAcct();

    acct1.performTransaction(75);
    acct2.performTransaction(-50);
    console.log(`acct1 balance = $${acct1.balance}, acct2 balance = $${acct2.balance}`);

    const acct3 = { balance: 0 };
    const acct4 = { balance: 0 };
    performTransaction.call(acct3, 150);
    performTransaction.apply(acct4, [-150]);
    console.log(`acct3 balance = $${acct3.balance}, acct4 balance = $${acct4.balance}`);

    const acct5 = { balance: 0 };
    const acct5TransPerform = performTransaction.bind(acct5);
    acct5TransPerform(-25);
    console.log(`acct5 balance = $${acct5.balance}`);
       
}());

