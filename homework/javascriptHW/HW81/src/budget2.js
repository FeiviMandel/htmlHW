(function () {
    'use strict';
    document.getElementById('budgetForm').addEventListener('submit', e => {
        e.preventDefault();
        document.getElementById('budget').innerText = document.getElementById('budgetInput').value || 0;
        const budget = document.getElementById("budget").innerText;
        const expenses = document.getElementById("expenses").innerText;
        document.getElementById('balance').innerText = budget - expenses;
    });

    class Budget {

        constructor(budget) {
            this.budget = budget;
        }

    }
}());