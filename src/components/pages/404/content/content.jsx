import classNames from 'classnames/bind';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './content.module.scss';
import errorSvg from './images/404-error.svg';

const cx = classNames.bind(styles);

const Content = ({ title, description, buttonText }) => {
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <img className={cx('image')} src={errorSvg} alt="" aria-hidden />
        <Heading className={cx('title')} size="xl">{title}</Heading>
        <p className={cx('description')}>{description}</p>
        <Button onClick={goBack}>{buttonText}</Button>
      </div>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Content;
