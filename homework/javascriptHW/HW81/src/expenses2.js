import './css/budgetApp.css';
import img1 from './images/editSymbol.png';
import img2 from './images/deleteSymbol.png';

export default class Expenses {
    constructor(expSymbl) {
        this.expSymbl = expSymbl;
        this.balance = document.getElementById('balance');
        this.expense = document.getElementById('expenses');
        this.expensesImgSpan = document.getElementById('expensesImg');
        this.expensesImgSpan.appendChild(expSymbl);
        this.expenseInput = document.getElementById('expenseInput');
        this.expenseAmountInput = document.getElementById('expenseAmountInput');
        this.expenses = [];
    }

    addExpense() {
        const expenseTable = document.getElementById('expenseTable');
        let sum = parseInt(this.expense.innerText) || 0;
        const editSymbl = new Image();
        editSymbl.src = img1;
        const delSymbl = new Image();
        delSymbl.src = img2;
        const newRow = expenseTable.insertRow();
        const title = newRow.insertCell();
        const expValue = newRow.insertCell();
        const editCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();
        const newExpense = {
            newRow: newRow,
            expenseTitle: this.expenseInput,
            expenseValue: this.expenseAmountInput,
            editSymbl: editSymbl,
            delSymbl: delSymbl,
            title: title,
            expValue: expValue,
            editCell: editCell,
            deleteCell: deleteCell,
            sum: sum
        };
        const editForm = document.createElement('div');
        editForm.setAttribute('class', 'editForm');
        const textInput = document.createElement('input');
        const valueInput = document.createElement('input');
        const label1 = document.createElement('label');
        const label2 = document.createElement('label');
        const buttons = document.createElement('div');
        const saveButton = document.createElement('button');
        const cancelButton = document.createElement('button');
        newExpense.title.innerHTML = (`- ${newExpense.expenseTitle.value}`);
        newExpense.expValue.innerHTML = (`$${newExpense.expenseValue.value}`);
        newExpense.editCell.appendChild(newExpense.editSymbl);
        newExpense.deleteCell.appendChild(newExpense.delSymbl);
        newExpense.sum = parseInt(this.expense.innerText);
        newExpense.sum += parseInt(newExpense.expenseValue.value);
        this.expense.innerText = newExpense.sum;
        this.expenses.push(newExpense);
        newExpense.delSymbl.addEventListener('click', () => {
            this.expenses = this.expenses.filter(c => c !== newExpense.delSymbl);
            expenseTable.deleteRow(newRow.rowIndex);
            newExpense.sum = parseInt(this.expense.innerText);
            newExpense.sum -= parseInt(newExpense.expValue.innerText.substring(1));
            this.expense.innerText = newExpense.sum;
            this.balance.innerText = parseInt(this.balance.innerText) + parseInt(newExpense.expValue.innerText.substring(1));
        });

        textInput.setAttribute('type', 'text');
        valueInput.setAttribute('type', 'number');
        label1.innerHTML = 'Please Enter Your Expense ';
        editForm.appendChild(label1);
        editForm.appendChild(textInput);
        label2.innerHTML = 'Please Enter Expense Amount ';
        editForm.appendChild(label2);
        editForm.appendChild(valueInput);
        saveButton.innerHTML = 'Save';
        buttons.appendChild(saveButton);
        cancelButton.innerHTML = 'Cancel';
        buttons.appendChild(cancelButton);
        editForm.appendChild(buttons);
        newExpense.editSymbl.addEventListener('click', () => {
            document.body.appendChild(editForm);
        });
        saveButton.addEventListener('click', () => {
            console.log('removing editForm');
            document.body.removeChild(editForm);
            newExpense.title.innerText = (`- ${textInput.value || newExpense.title.innerHTML.substring(1)}`);
            let oldExpValue = parseInt(newExpense.expValue.innerText.substring(1));
            newExpense.expValue.innerText = (`$${parseInt(valueInput.value || newExpense.newRow.expValue.innerHTML.substring(1))}`);
            // newExpense.editCell.appendChild(newExpense.editSymbl);
            // newExpense.deleteCell.appendChild(newExpense.delSymbl);
            newExpense.sum = parseInt(this.expense.innerText);
            newExpense.sum -= oldExpValue;
            newExpense.sum += parseInt(valueInput.value || newExpense.expValue.innerHTML.substring(1));
            this.expense.innerText = newExpense.sum;
            this.balance.innerText = parseInt(this.balance.innerText) + oldExpValue - (parseInt(valueInput.value || newExpense.expValue.innerHTML.substring(1)));
        });
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(editForm);
        });
        
        this.balance.innerText = parseInt(this.balance.innerText) - parseInt(newExpense.expValue.innerText.substring(1));
    }

    // editForm.style.backgroundColor = 'lightblue';
    // editForm.style.padding = '1em';
    // editForm.style.paddingBottom = '38px';
    // editForm.style.boxSizing = 'border-box';
    // editForm.style.width = '230px';
    // editForm.style.height = '150px';
    // editForm.style.position = 'absolute';
    // editForm.style.top = '50%';
    // editForm.style.left = '50%';
    // editForm.style.border = '1px solid black';


}