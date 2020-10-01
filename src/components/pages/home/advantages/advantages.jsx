import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import getTextWithoutParagraph from 'utils/get-text-without-paragraph';
import Item from './item';

import styles from './advantages.module.scss';

const cx = classNames.bind(styles);

const Advantages = ({ title, subtitle, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2" size="sm" color="secondary">{title}</Heading>
      <Heading className={cx('subtitle')} tag="p" size="xl" innerHTML={getTextWithoutParagraph(subtitle)} />

      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item number={index + 1} key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);

Advantages.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      footerText: PropTypes.string.isRequired,
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      imageName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Advantages;
