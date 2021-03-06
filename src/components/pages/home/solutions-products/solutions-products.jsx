import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './solutions-products.module.scss';

const cx = classNames.bind(styles);

const SolutionsProducts = ({ items, itemFooterText }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'md-hidden')}>
      <div className={cx('content')}>
        {items.map((
          { title, description, list, footerUrl: { url: footerUrl } }, index,
        ) => (
          <div className={cx('item-wrapper')} key={index}>
            <Heading className={cx('title')} tag="h2" size="xl">{title}</Heading>
            <p className={cx('description')}>{description}</p>
            <ul className={cx('list')}>
              {list.map(({ item }, index) => (
                <li className={cx('item')} key={index}>
                  <div className={cx('number')}>
                    <span>{index + 1}</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button className={cx('button')} to={footerUrl}>{itemFooterText}</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

SolutionsProducts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      item: PropTypes.string.isRequired,
    })).isRequired,
    footerUrl: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  })).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default SolutionsProducts;
