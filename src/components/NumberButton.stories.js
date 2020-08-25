import React from 'react';
import { action } from '@storybook/addon-actions';

import NumberButton from './NumberButton';

export default {
  title: 'Components/Number',
  component: NumberButton,
};

const actions = {
  onClick: action('onClick'),
};

export const One = () => (
  <NumberButton value={1} {...actions} />
);

export const Two = () => (
  <NumberButton value={2} {...actions} />
);

export const Three = () => (
  <NumberButton value={3} {...actions} />
);

export const Four = () => (
  <NumberButton value={4} {...actions} />
);

export const Five = () => (
  <NumberButton value={5} {...actions} />
);

export const Six = () => (
  <NumberButton value={6} {...actions} />
);

export const Seven = () => (
  <NumberButton value={7} {...actions} />
);

export const Eight = () => (
  <NumberButton value={8} {...actions} />
);

export const Nine = () => (
  <NumberButton value={9} {...actions} />
);
