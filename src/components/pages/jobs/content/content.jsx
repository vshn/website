import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import CompanyRating from './company-rating';
import styles from './content.module.scss';
import OpenPositions from './open-positions';

const cx = classNames.bind(styles);

const Content = ({ openPositions, positions, text, companyRating }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <OpenPositions {...openPositions} {...positions} />
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: text }} />
      <CompanyRating {...companyRating} />
    </div>
  </section>
);

Content.propTypes = {
  openPositions: PropTypes.shape({
  }).isRequired,
  text: PropTypes.string.isRequired,
  companyRating: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

Content.defaultProps = {

};

export default Content;
