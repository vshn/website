import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './content.module.scss';
import OpenPositions from './open-positions';

const cx = classNames.bind(styles);

const Content = ({ content, title, positions }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      <OpenPositions className={cx('open-positions')} title={title} {...positions} />
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  positions: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Content;
