import './App.css';
import React, { Component } from 'react';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.operatorPressed = false;
    this.currentOperator = this.currentOperator || '';
    this.number1 = this.number1 || '';
    this.number2 = this.number2 || '';
    this.result = this.result || 0;
  }
  state = {
    result: this.result,
    numberButtons: [
      {
        id: 7,
        name: '7'
      },
      {
        id: 8,
        name: '8'
      },
      {
        id: 9,
        name: '9'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 5,
        name: '5'
      },
      {
        id: 6,
        name: '6'
      },
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 0,
        name: '0'
      }
    ],
    operatorButtons: [
      {
        id: 0,
        name: '+'
      },
      {
        id: 1,
        name: '-'
      },
      {
        id: 2,
        name: '÷'
      },
      {
        id: 3,
        name: '×'
      },
      {
        id: 4,
        name: '='
      }
    ]
  };
  numberClicked = e => {

    if (!this.operatorPressed) {
      this.number1 += e.target.innerText;
      this.result = this.number1
    }
    if (this.operatorPressed) {
      this.number2 += e.target.innerText;
      this.result = this.number2
    }
    this.setState({
      result: this.result
    })
  }
  operatorClicked = e => {
    this.operatorPressed = true;
    if (e.target.innerText === '+') {
      this.currentOperator = '+';
    }
    else if (e.target.innerText === '-') {
      this.currentOperator = '-';
    }
    else if (e.target.innerText === '÷') {
      this.currentOperator = '÷';
    }
    else if (e.target.innerText === '×') {
      this.currentOperator = '×';
    }
    else if (e.target.innerText === '=') {
      if (this.currentOperator === '-') {
        this.result = (parseFloat(this.number1) || 0) - (parseFloat(this.number2) || 0)
      }
      else if (this.currentOperator === '+') {
        this.result = (parseFloat(this.number1) || 0) + (parseFloat(this.number2) || 0)
      }
      else if (this.currentOperator === '×') {
        this.result = (parseFloat(this.number1) || 0) * (parseFloat(this.number2) ||1)
      }
      else if (this.currentOperator === '÷') {
        this.result = (parseFloat(this.number1) || 0) / (parseFloat(this.number2) || 1)
      }
      this.operatorPressed = false;
      this.number1 = this.result||'';
      this.number2 = '';
    }
    this.setState({
      result: this.result
    })
  }
  render() {
    return (
      <div className="App">
        <div id="screen">{this.state.result}</div>
        <h1 id="numB">{this.state.numberButtons.map((numberButtons) => <NumberButtons numberButtons={numberButtons} key={numberButtons.id} numberClicked={this.numberClicked} />)} </h1>
        <h1 id="opB">{this.state.operatorButtons.map((operatorButtons) => <OperatorButtons operatorButtons={operatorButtons} key={operatorButtons.id} operatorClicked={this.operatorClicked} />)} </h1>
      </div>
    );
  }
}

