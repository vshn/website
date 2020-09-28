import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Overlay from './overlay';

export const Default = () => <Overlay isVisible={boolean('isVisible', true)} onClick={action('onClick')} />;

export default {
  title: 'Shared / Overlay',
};
