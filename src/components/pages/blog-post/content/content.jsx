import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ content }) => (
  <article className={cx('wrapper')}>
    <div className="container">
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </article>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
