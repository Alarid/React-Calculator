import React from 'react';
import ClearButton from './ClearButton';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Clear',
  component: ClearButton,
};

export const Default = () => (
  <ClearButton onClear={ action('onClear') } />
);