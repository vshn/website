import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './prominent-text.module.scss';

const cx = classNames.bind(styles);

const ProminentText = ({ text }) => (
  <section className={cx('wrapper')}>
    <div className={cx('text')} dangerouslySetInnerHTML={{ __html: text }} />
  </section>
);

ProminentText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProminentText;
