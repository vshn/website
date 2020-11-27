import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './content.module.scss';
import OpenPositions from './open-positions';

import 'components/lazy-blocks/rating-card/rating-card.scss';

const cx = classNames.bind(styles);

const Content = ({ openPositions, positions, content }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <OpenPositions {...openPositions} {...positions} />
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </section>
);

Content.propTypes = {
  openPositions: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  positions: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
};

Content.defaultProps = {

};

export default Content;
