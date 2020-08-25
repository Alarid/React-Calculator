import React from 'react';

import Display from '../components/Display';
import ClearButton from '../components/ClearButton';
import OperationButton from '../components/OperationButton';
import NumberButton from '../components/NumberButton';

import './Calculator.css';

const operations = {
  PLUS: "×",
  MINUS: "−",
  DIVIDE: "÷",
  MULTIPLY: "×",
  EQUAL: "=",
}

export default class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => ({
    result: true,
    display: "0",
  })

  handleClear = () => {
    this.setState(this.initialState());
  }

  addToDisplay(elem) {
    this.setState(state => ({
      display: state.result ? elem : state.display+elem,
      result: false,
    }));
  }

  handleOperation = (event) => {
    const value = event.target.value;
    if (value !== "=") {
      this.addToDisplay(value);
    } else {
      const display = this.state.display;
      display
        .replace(operations.PLUS, '+')
        .replace(operations.MINUS, '-')
        .replace(operations.MULTIPLY, '*')
        .replace(operations.DIVIDE, '/')
        .replace(operations.EQUAL, '=');
      const result = eval(display); //eslint-disable-line no-eval
      this.setState(state => ({
        display: result.toString(),
        result: true,
      }))
    }
  }

  handleNumber = (event) => {
    const value = event.target.value;
    this.addToDisplay(value);
  }

  render() {
    const operationBtnActions = {
      onClick: this.handleOperation,
    };
    const numberBtnActions = {
      onClick: this.handleNumber,
    }

    return (
      <div className="calculator">
        <Display text={this.state.display} />

        <NumberButton value={7} {...numberBtnActions} />
        <NumberButton value={8} {...numberBtnActions} />
        <NumberButton value={9} {...numberBtnActions} />
        <OperationButton label={operations.PLUS} {...operationBtnActions} />

        <NumberButton value={4} {...numberBtnActions} />
        <NumberButton value={5} {...numberBtnActions} />
        <NumberButton value={6} {...numberBtnActions} />
        <OperationButton label={operations.MINUS} {...operationBtnActions} />

        <NumberButton value={1} {...numberBtnActions} />
        <NumberButton value={2} {...numberBtnActions} />
        <NumberButton value={3} {...numberBtnActions} />
        <OperationButton label={operations.MULTIPLY} {...operationBtnActions} />

        <NumberButton value={0} {...numberBtnActions} />
        <ClearButton onClear={this.handleClear} />
        <OperationButton label={operations.DIVIDE} {...operationBtnActions} />
        <OperationButton label={operations.EQUAL} {...operationBtnActions} />

      </div>
    )
  }
}