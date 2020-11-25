import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './company-rating.module.scss';

const cx = classNames.bind(styles);

const CompanyRating = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <Heading className={cx('title')} tag="h3" size="lg">{title}</Heading>
    <div className={cx('items-wrapper')}>
      {items.map(({ description, image }, index) => (
        <div className={cx('item')} key={index}>
          <p className={cx('description')}>{description}</p>
          <div className={cx('image-wrapper')}>
            <GatsbyImage className={cx('image')} fluid={image.localFile.childImageSharp.fluid} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

CompanyRating.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
  })).isRequired,
};

CompanyRating.defaultProps = {

};

export default CompanyRating;
