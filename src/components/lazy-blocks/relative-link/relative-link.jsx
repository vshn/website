import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';

import urlIcon from './images/url.svg';
import styles from './relative-link.module.scss';

const cx = classNames.bind(styles);

const RelativeLink = ({ icon, text, buttonLink, buttonText }) => (
  <section className={cx('wrapper')}>
    <span className={cx('icon')}>
      <img src={icon ? icon.url : urlIcon} alt="" aria-hidden />
    </span>
    <div className={cx('inner')}>
      <div className={cx('text')} dangerouslySetInnerHTML={{ __html: text }} />
      {buttonLink && buttonText && <Button className={cx('button')} to={buttonLink}>{buttonText}</Button>}
    </div>
  </section>
);

RelativeLink.propTypes = {
  icon: PropTypes.shape({
    url: PropTypes.string,
  }),
  text: PropTypes.string.isRequired,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
};

RelativeLink.defaultProps = {
  icon: {
    url: null,
  },
  buttonLink: '',
  buttonText: '',
};

export default RelativeLink;
