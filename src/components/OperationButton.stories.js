import React from 'react';
import { action } from '@storybook/addon-actions';

import OperationButton from './OperationButton';

export default {
  title: 'Components/Operation',
  component: OperationButton,
};

const actions = {
  onClick: action('onClick'),
};

export const Equal = () => (
  <OperationButton label="=" {...actions} />
)

export const Plus = () => (
  <OperationButton label="+" {...actions} />
)

export const Minus = () => (
  <OperationButton label="−" {...actions} />
)

export const Multiply = () => (
  <OperationButton label="×" {...actions} />
)

export const Divide = () => (
  <OperationButton label="÷" {...actions} />
)