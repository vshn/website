import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MobileMenu from './mobile-menu';

export const Default = () => (
  <MobileMenu
    isOpen={boolean('isOpen', true)}
    onCloseButtonClick={action('onCloseButtonClick')}
  />
);

export default {
  title: 'Shared / MobileMenu',
};
