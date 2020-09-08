import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import Heading from './heading';

export const Default = () => (
  <Heading
    tag={select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong'])}
    size={select('size', ['xxl', 'xl', 'lg', 'md', 'sm'])}
    color={select('color', ['primary', 'secondary', 'tertiary', 'quaternary'])}
  >
    {text('content', 'We run your application')}
  </Heading>
);

export const WithHighlightedWords = () => (
  <Heading
    tag={select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong'])}
    size={select('size', ['xxl', 'xl', 'lg', 'md', 'sm'])}
    color={select('color', ['primary', 'secondary', 'tertiary', 'quaternary'])}
    highlightedWordsColor={select('highlightedWordsColor', ['primary', 'secondary'])}
    innerHTML={text('content', 'We run your <strong>application</strong>')}
  />
);

export default {
  title: 'Shared / Heading',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
