import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';

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
