import React from 'react';
import { action } from '@storybook/addon-actions';

import OperationButton from './OperationButton';
import '../layout/Calculator.css';

export default {
  title: 'Components/Operation',
  component: OperationButton,
  decorators: [story => (
    <div className="calculator">
      <div style={{flex: '75%'}}></div>
      {story()}
    </div>
  )]
};

const actions = {
  onClick: action('onClick'),
};
const data = {
  canAddOperation: true,
};

export const Equal = () => (
  <OperationButton label="=" {...data} {...actions} />
)

export const Plus = () => (
  <OperationButton label="+" {...data} {...actions} />
)
export const PlusDisabled = () => (
  <OperationButton label="+" canAddOperation={false} {...actions} />
)

export const Minus = () => (
  <OperationButton label="−" {...data} {...actions} />
)

export const Multiply = () => (
  <OperationButton label="×" {...data} {...actions} />
)
export const MultiplyDisabled = () => (
  <OperationButton label="×" canAddOperation={false} {...actions} />
)

export const Divide = () => (
  <OperationButton label="÷" {...data} {...actions} />
)