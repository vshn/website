import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import Item from './item';
import styles from './login-sections.module.scss';

const cx = classNames.bind(styles);

const LoginSections = ({ title, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} size="xl">{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </div>
  </section>
);

LoginSections.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonLink: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    buttonText: PropTypes.string.isRequired,
  })).isRequired,
};

export default LoginSections;
