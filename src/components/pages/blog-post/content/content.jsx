import React from 'react';

import classNames from 'classnames/bind';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = () => (
  <article className={cx('wrapper')}>
    <div className="container">
      <div className={cx('content')} />
    </div>
  </article>
);

export default Content;
