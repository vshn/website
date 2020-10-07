import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import star from './images/star.svg';
import doubleStar from './images/double-star.svg';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2" size="xl" color="primary" innerHTML={title} />
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('link')} to={item.url}>
              {item.name}
              {item.type === 'medium' && (
                <img className={cx('star')} src={star} data-title={item.info} alt="" aria-hidden />
              )}
              {item.type === 'high' && (
                <img className={cx('double-star')} src={doubleStar} data-title={item.info} alt="" aria-hidden />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Content.defaultProps = {

};

export default Content;
