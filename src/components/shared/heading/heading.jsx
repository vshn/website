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
    ...otherProps
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
      <Tag className={className} dangerouslySetInnerHTML={{ __html: innerHTML }} {...otherProps} />
    );
  }

  return (
    <Tag className={className} {...otherProps}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  size: PropTypes.oneOf(['xxl', 'xl', 'lg', 'md', 'sm', 'xs']),
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
