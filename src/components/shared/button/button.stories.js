import React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './button';

export const Default = () => (
  <Button
    to={boolean('as Link') ? '/link' : ''}
    size={select('size', ['sm', 'md'])}
    onClick={action('onClick')}
  >
    {text('Content', 'Read More')}
  </Button>
);

export default {
  title: 'Shared / Button',
};
