import Balance from './balance';
// import img from './images/balanceSymbol.png';

export default class Budget {
    constructor(budgetImg, balSymbl) {
        this.budgetInput = document.getElementById('budgetInput');
        this.budgetImgSpan = document.getElementById('budgetImg');
        this.budgetImgSpan.appendChild(budgetImg);
        this.balanceImgSpan = document.getElementById('balanceImg');
        this.balanceImgSpan.appendChild(balSymbl);
        this.budget = document.getElementById("budget");
        this.expenses = document.getElementById("expenses");
        this.balance = document.getElementById('balance');
    }
    setBudget() {

        // const newBalance = new Balance();
        const budgetForm = document.getElementById('budgetForm');
        // budgetForm.addEventListener('submit', () => {
        this.budget.innerText = this.budgetInput.value || this.budget.innerText;
        this.balance.innerText = parseInt(this.budget.innerText) - (parseInt(this.expenses.innerText) || 0);
        budgetForm.reset();
        // });
    }
}
