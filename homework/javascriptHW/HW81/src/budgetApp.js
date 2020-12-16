import Expenses from './expenses2';
// import Balance from './balance';
import Budget from './budget';
import img1 from './images/expensesSymbol.png';
import img2 from './images/balanceSymbol.png';
import img3 from './images/budgetSymbol.png';

const expenseForm = document.getElementById('expensesForm');
const expensesImg = new Image();
expensesImg.src = img1;
const balanceImg = new Image();
balanceImg.src = img2;
const budgetImg = new Image();
budgetImg.src = img3;
const expenses = new Expenses(expensesImg);
// const balance =new Balance(balanceImg);
const budget = new Budget(budgetImg, balanceImg);
const budgetForm = document.getElementById('budgetForm');
budgetForm.addEventListener('submit', e => {
    'use strict';
    e.preventDefault();
    budget.setBudget();
    // balance.setBalance();
    // budgetForm.reset();
});
expenseForm.addEventListener('submit', e => {
    'use strict';
    e.preventDefault();
    expenses.addExpense();
    // balance.setBalance();
    expenseForm.reset();

});