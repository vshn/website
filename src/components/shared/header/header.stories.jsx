import React from 'react';
import { text } from '@storybook/addon-knobs';
import Header from './header';

export const Default = () => (
  <Header
    buttonText={text('buttonText', 'Contact Us')}
    buttonUrl={text('buttonUrl', '/contact')}
  />
);

export default {
  title: 'Shared / Header',
};
