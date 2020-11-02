import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';

import Overlay from './overlay';

export const Default = () => <Overlay isVisible={boolean('isVisible', true)} onClick={action('onClick')} />;

export default {
  title: 'Shared / Overlay',
};
