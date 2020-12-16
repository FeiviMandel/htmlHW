// (function () {
'use strict';
import img1 from './images/deleteSymbol.png';
import img2 from './images/editSymbol.png';
import img3 from './images/expensesSymbol.png';

export default class Expenses {

    constructor(expTitle, expVal) {
        this.expTitle = expTitle;
        this.expVal = expVal;
    }
}
let balance = document.getElementById('balance');
let expense = document.getElementById('expenses');
const expensesImgSpan = document.getElementById('expensesImg');
const expensesImg = new Image();
expensesImg.src = img3;
expensesImgSpan.appendChild(expensesImg);
let expenses = [];
let sum = parseInt(expense.innerText) || 0;
const expenseTable = document.getElementById('expenseTable');
const expenseTitleInput = document.getElementById('expenseInput');
const expenseAmountInput = document.getElementById('expenseAmountInput');
const expenseForm = document.getElementById('expensesForm');
expenseForm.addEventListener('submit', e => {
    e.preventDefault();
    const newExpense = {
        expenseTitle: expenseTitleInput.value,
        expenseValue: expenseAmountInput.value
    };
    const eValue = parseInt(newExpense.expenseValue);
    expenses.push(newExpense);
    const newRow = expenseTable.insertRow();
    const title = newRow.insertCell();
    const expValue = newRow.insertCell();
    const editCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    title.innerHTML = (`- ${newExpense.expenseTitle}`);
    expValue.innerHTML = (`$${eValue}`);
    sum += eValue;
    expense.innerText = sum;
    const budget = document.getElementById("budget").innerText;
    balance.innerText = budget - expense.innerText;
    const editSymbol = new Image();
    editSymbol.src = img2;
    editCell.appendChild(editSymbol);
    const deleteSymbol = new Image();
    deleteSymbol.src = img1;
    deleteCell.appendChild(deleteSymbol);
    deleteSymbol.addEventListener('click', () => {
        expenses = expenses.filter(c => c !== newExpense);
        expenseTable.deleteRow(newRow.rowIndex);
        sum = parseInt(expense.innerText);
        sum -= parseInt(expValue.innerText.substring(1));
        expense.innerText = sum;
        balance.innerText = parseInt(balance.innerText) + parseInt(expValue.innerText.substring(1));
    });
    editSymbol.addEventListener('click', () => {
        const editForm = document.createElement('div');
        const textInput = document.createElement('input');
        textInput.setAttribute('type', 'text');
        const valueInput = document.createElement('input');
        valueInput.setAttribute('type', 'number');
        const label1 = document.createElement('label');
        label1.innerHTML = 'Please Enter Your Expense ';
        editForm.appendChild(label1);
        editForm.appendChild(textInput);
        const label2 = document.createElement('label');
        label2.innerHTML = 'Please Enter Expense Amount ';
        editForm.appendChild(label2);
        editForm.appendChild(valueInput);

        const buttons = document.createElement('div');
        const saveButton = document.createElement('button');
        saveButton.innerHTML = 'Save';
        buttons.appendChild(saveButton);
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        buttons.appendChild(cancelButton);
        editForm.appendChild(buttons);
        document.body.appendChild(editForm);

        editForm.style.backgroundColor = 'lightblue';
        editForm.style.padding = '1em';
        editForm.style.paddingBottom = '38px';
        editForm.style.boxSizing = 'border-box';
        editForm.style.width = '230px';
        editForm.style.height = '150px';
        editForm.style.position = 'absolute';
        editForm.style.top = '50%';
        editForm.style.left = '50%';
        editForm.style.border = '1px solid black';

        saveButton.addEventListener('click', () => {
            document.body.removeChild(editForm);
            title.innerHTML = (`- ${textInput.value || title.innerHTML.substring(1)}`);
            const oldExpValue = parseInt(expValue.innerText.substring(1));
            expValue.innerHTML = (`$${parseInt(valueInput.value || expValue.innerHTML.substring(1))}`);
            editCell.appendChild(editSymbol);
            deleteCell.appendChild(deleteSymbol);
            sum = parseInt(expense.innerText);
            sum -= oldExpValue;
            sum += parseInt(valueInput.value || expValue.innerHTML.substring(1));
            expense.innerText = sum;
            balance.innerText = parseInt(balance.innerText) + oldExpValue - (parseInt(valueInput.value || expValue.innerHTML.substring(1)));
        });
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(editForm);
        });
    });
    expenseForm.reset();
});

// }());