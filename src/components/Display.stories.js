import React from 'react';
import Display from './Display';

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    text: '0',
  },
}


const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '0',
};

export const Multiplication = Template.bind({});
Multiplication.args = {
  text: '4×2'
};