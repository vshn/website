import React from 'react';
import { text } from '@storybook/addon-knobs';
import Contact from './contact.view';

export const Default = () => (
  <Contact
    title={text('title', 'Contact us')}
    description={text('description', 'Our team of experts is available to you. In case of emergency even 24/7')}
    buttonText={text('buttonText', 'Contact Us')}
    buttonUrl={text('buttonUrl', '/')}
  />
);

export default {
  title: 'Shared / Contact',
};
