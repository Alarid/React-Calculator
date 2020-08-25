import React from 'react';
import safeEval from 'safe-eval';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Display from '../components/Display';
import ClearButton from '../components/ClearButton';
import OperationButton from '../components/OperationButton';
import NumberButton from '../components/NumberButton';

import './Calculator.css';

// Operations handled by the calculator
const operations = {
  PLUS: "+",
  MINUS: "−",
  DIVIDE: "÷",
  MULTIPLY: "×",
  EQUAL: "=",
}

export default class Calculator extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = this.initialState();
    this.supportedKeyboardEvents = {
      numbers: ['0','1','2','3','4','5','6','7','8','9'],
      operations: ['+','-','/','*','='],
      specials: ['del', 'enter'],
    }
  }

  // Initial state
  initialState = () => ({
    result: true,
    display: "0",
  })

  // Callback for a click on clear button
  handleClear = () => {
    this.setState(this.initialState());
  }

  // Add an element (value / operation) to the display
  addToDisplay(elem) {
    this.setState(state => ({
      display: (state.result && state.display === "0") ? elem : state.display+elem,
      result: false,
    }));
  }

  // Returns true if an operation can be added to the display, false otherwise
  canAddOperation = () => (
    !(this.state.result && this.state.display === "0")
  )

  // Callback for a click on an operation button (+, -, *, /, =)
  handleOperation = (event, op) => {
    const value = event ? event.target.value : op;
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
      this.setState({
        display: result.toString(),
        result: true,
      })
    }
  }

  // Callback for a click on a number button
  handleNumber = (event, nb) => {
    const value = event ? event.target.value : nb;
    this.addToDisplay(value);
  }

  // Callback for a keyboard event
  handleKeyboardEvent = (key, e) => {
    e.stopPropagation();
    // If the user typed in a number
    if (this.supportedKeyboardEvents.numbers.indexOf(key) !== -1) {
      // Add it to the display
      this.handleNumber(null, key);
    } else if (this.supportedKeyboardEvents.operations.indexOf(key) !== -1) {
      // If the user typed in an operation (*, +, -, ...)
      this.handleOperation(null, key);
    } else if (this.supportedKeyboardEvents.specials.indexOf(key) !== -1) {
      // If the user typed in a special key (delete, enter)
      switch (key) {
        case 'del':
          this.handleClear();
          break;
        case 'enter':
          this.handleOperation(null, '=');
          break;
        default:
          break;
      }
    }
  }

  // Render the component
  render() {
    const operationBtnActions = {
      onClick: this.handleOperation,
    };
    const numberBtnActions = {
      onClick: this.handleNumber,
    }
    const canAddOperation = this.canAddOperation();
    const keys = Object.keys(this.supportedKeyboardEvents)
      .map(type => this.supportedKeyboardEvents[type])
      .flat();

    return (
      <div className="calculator">
        <KeyboardEventHandler
          handleKeys={keys}
          onKeyEvent={this.handleKeyboardEvent}
        />

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