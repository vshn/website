import React from 'react';
import { text } from '@storybook/addon-knobs';
import Footer from './footer';

export const Default = () => (
  <Footer
    design={text('design', 'Creative design made by <a href="https://pixelpoint.io/">Pixel Point</a>')}
    address={text('address', 'AG Neugasse 10, CH-8005, Zürich, Switzerland')}
    copyright={text('copyright', '© 2020 VSHN AG')}
  />
);

export default {
  title: 'Shared / Footer',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
