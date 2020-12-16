export default class Balance {
    constructor() {
        // this.balanceImgSpan = document.getElementById('balanceImg');
        // this.balanceImgSpan.appendChild(balSymbl);
        this.budget = document.getElementById("budget").innerText;
        this.expenses = document.getElementById("expenses").innerText;
        // document.getElementById('balance').innerText = this.budget - this.expenses;
        // this.setBalance();
    }
    setBalance() {
        document.getElementById('balance').innerText = parseInt(this.budget) - parseInt(this.expenses);
    }
}
