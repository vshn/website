import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import cup from './images/cup.svg';
import doubleCup from './images/double-cup.svg';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2" size="xl" color="primary" innerHTML={title} />
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('link')} to={item.url}>{item.name}</Link>
            {item.type === 'medium' && (
              <Link className={cx('icon-wrapper', 'cup')} title={item.info} to={item.storyUrl}><img src={cup} alt="" aria-hidden /></Link>
            )}
            {item.type === 'high' && (
              <Link className={cx('icon-wrapper', 'double-cup')} title={item.info} to={item.storyUrl}><img src={doubleCup} alt="" aria-hidden /></Link>
            )}
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
      storyUrl: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Content.defaultProps = {

};

export default Content;
