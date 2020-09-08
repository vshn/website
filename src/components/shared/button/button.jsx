import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';

import styles from './button.module.scss';

const cx = classNames.bind(styles);

const Button = (props) => {
  const {
    className: additionalClassName,
    to,
    size,
    children,
    ...otherProps
  } = props;

  const Tag = to ? Link : 'button';

  const className = cx(
    'wrapper',
    `wrapper_size_${size}`,
    additionalClassName,
  );

  return (
    <Tag className={className} to={to} {...otherProps}>
      {children}
    </Tag>
  );
};

Button.defaultProps = {
  className: null,
  to: null,
  size: 'md',
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.node.isRequired,
};

export default Button;
