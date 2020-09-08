import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './heading.module.scss';

const cx = classNames.bind(styles);

const Heading = (props) => {
  const {
    className: additionalClassName,
    tag: Tag,
    size,
    color,
    highlightedWordsColor,
    innerHTML,
    children,
  } = props;

  const className = cx(
    'wrapper',
    `wrapper_size_${size}`,
    `wrapper_color_${color}`,
    `wrapper_highlighted-words-color_${highlightedWordsColor}`,
    additionalClassName,
  );

  if (innerHTML) {
    return (
      <Tag className={className} dangerouslySetInnerHTML={{ __html: innerHTML }} />
    );
  }

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong']),
  size: PropTypes.oneOf(['xxl', 'xl', 'lg', 'md', 'sm']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  highlightedWordsColor: PropTypes.oneOf(['primary', 'secondary']),
  innerHTML: PropTypes.string,
  children: PropTypes.node,
};

Heading.defaultProps = {
  className: '',
  tag: 'h1',
  size: 'xxl',
  color: 'primary',
  highlightedWordsColor: 'primary',
  innerHTML: '',
  children: null,
};

export default Heading;
