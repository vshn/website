import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ name, acf: { image, jobTitle, jobPosition, socialLinks }, icons }) => (
  <div className={cx('item-wrapper')}>
    <div className={cx('image-wrapper')}>
      {image && <GatsbyImage className={cx('image')} fluid={image.localFile.childImageSharp.fluid} />}
    </div>
    <div className={cx('content')}>
      <div className={cx('details')}>
        <span className={cx('job-title')}>{jobTitle}</span>
        <Heading className={cx('name')} tag="h4" size="lg">{name}</Heading>
        <span className={cx('job-position')}>{jobPosition}</span>
      </div>
      <ul className={cx('social-links')}>
        {Object.entries(socialLinks).map(([key, value], index) => {
          const company = key.replace(/Link/g, '');
          const Icon = icons[company];
          if (!value) {
            return null;
          }
          return (
            <li key={index} className={cx('social-link-wrapper')}>
              <a
                className={cx('social-link', `social-link_${company}`)}
                href={value}
                target="_blank"
                rel="noopener"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    image: PropTypes.shape({
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
            sizes: PropTypes.string.isRequired,
            aspectRatio: PropTypes.number.isRequired,
          }),
        }),
      }),
    }),
    jobTitle: PropTypes.string.isRequired,
    jobPosition: PropTypes.string,
    socialLinks: PropTypes.arrayOf(PropTypes.string),
  }),
  icons: PropTypes.objectOf(PropTypes.any).isRequired,
};

Item.defaultProps = {
  image: null,
  jobPosition: null,
  socialLinks: [],
};

export default Item;
