// (function () {
'use strict';
import img from './images/balanceSymbol.png';
const balanceImgSpan = document.getElementById('balanceImg');
const balanceImg = new Image();
balanceImg.src = img;
balanceImgSpan.appendChild(balanceImg);
const budget = document.getElementById("budget").innerText;
const expenses = document.getElementById("expenses").innerText;
document.getElementById('balance').innerText = budget - expenses;
// }());