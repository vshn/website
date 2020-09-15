import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import illustration from './images/illustration.svg';

import styles from './contact.module.scss';

const cx = classNames.bind(styles);

const Contact = ({ title, description, buttonText, buttonUrl }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('title')} tag="h2" size="xl">{title}</Heading>
      <p className={cx('description')}>{description}</p>
      <Button to={buttonUrl}>{buttonText}</Button>
    </div>

    <img className={cx('illustration')} src={illustration} alt="" aria-hidden />
  </section>
);

Contact.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

Contact.defaultProps = {
  title: 'Contact us',
  description: 'Our team of experts is available to you. In case of emergency even 24/7',
  buttonText: 'Contact Us',
  buttonUrl: '/',
};

export default Contact;
