import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ children }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      {children}
    </div>
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
