import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './rating-cards.module.scss';

const cx = classNames.bind(styles);

const RatingCards = ({ title, description, items }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('title')} tag="h3">{title}</Heading>
      <div className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />
      <div className={cx('rating-cards')}>
        {items.map(({ description, image, link }, index) => (
          <div className={cx('item')} key={index}>
            <div className={cx('text')} dangerouslySetInnerHTML={{ __html: description }} />
            <Link className={cx('image-wrapper')} to={link.url} target={link.target}>
              <img src={image.localFile.publicURL} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

RatingCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.objectOf(PropTypes.any).isRequired,
    link: PropTypes.shape({
      url: PropTypes.string,
      target: PropTypes.string,
      title: PropTypes.string,
    }),
  })),
};

RatingCards.defaultProps = {

};

export default RatingCards;
