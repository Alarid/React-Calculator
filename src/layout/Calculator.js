import React from 'react';
import safeEval from 'safe-eval';

import Display from '../components/Display';
import ClearButton from '../components/ClearButton';
import OperationButton from '../components/OperationButton';
import NumberButton from '../components/NumberButton';

import './Calculator.css';

const operations = {
  PLUS: "+",
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
      display: (state.result && state.display === "0") ? elem : state.display+elem,
      result: false,
    }));
  }

  canAddOperation = () => (
    !(this.state.result && this.state.display === "0")
  )

  handleOperation = (event) => {
    const value = event.target.value;
    // New operation to add to display
    if (value !== "=") {
      // Can't add an operation to a 0 result
      if (this.canAddOperation()) {
        this.addToDisplay(value);
      }
    } else {
      // Requested the operation result
      const display = this.state.display;
      const operation = display
        .replace(operations.PLUS, '+')
        .replace(operations.MINUS, '-')
        .replace(operations.MULTIPLY, '*')
        .replace(operations.DIVIDE, '/')
        .replace(operations.EQUAL, '=');
      const result = safeEval(operation); //eslint-disable-line no-eval
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
    const canAddOperation = this.canAddOperation();
    return (
      <div className="calculator">
        <Display text={this.state.display} />

        <NumberButton value={7} {...numberBtnActions} />
        <NumberButton value={8} {...numberBtnActions} />
        <NumberButton value={9} {...numberBtnActions} />
        <OperationButton
          label={operations.PLUS}
          canAddOperation={canAddOperation}
          {...operationBtnActions}
        />

        <NumberButton value={4} {...numberBtnActions} />
        <NumberButton value={5} {...numberBtnActions} />
        <NumberButton value={6} {...numberBtnActions} />
        <OperationButton
          label={operations.MINUS}
          canAddOperation={canAddOperation}
          {...operationBtnActions}
        />

        <NumberButton value={1} {...numberBtnActions} />
        <NumberButton value={2} {...numberBtnActions} />
        <NumberButton value={3} {...numberBtnActions} />
        <OperationButton
          label={operations.MULTIPLY}
          canAddOperation={canAddOperation}
          {...operationBtnActions}
        />

        <NumberButton value={0} {...numberBtnActions} />
        <ClearButton onClear={this.handleClear} />
        <OperationButton
          label={operations.DIVIDE}
          canAddOperation={canAddOperation}
          {...operationBtnActions}
        />
        <OperationButton
          label={operations.EQUAL}
          canAddOperation={canAddOperation}
          {...operationBtnActions}
        />

      </div>
    )
  }
}