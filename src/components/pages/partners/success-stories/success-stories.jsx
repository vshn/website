import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './success-stories.module.scss';

const cx = classNames.bind(styles);

const SuccessStories = ({ title, itemFooterText, successStories }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} id="success-stories" tag="h2" size="xl" color="primary">{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {successStories.map(({ uri: url, title, acf: { logo } }, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('link')} to={url}>
              <div className={cx('logo-wrapper')}>
                <GatsbyImage
                  className={cx('logo')}
                  style={{ maxHeight: '80px' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fluid={logo.localFile.childImageSharp.fluid}
                  alt={`${title} logo`}
                />
              </div>
              <span className={cx('footer-text')}>{itemFooterText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

SuccessStories.propTypes = {
  title: PropTypes.string.isRequired,
  successStories: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    acf: PropTypes.shape({
      logo: PropTypes.objectOf(PropTypes.any).isRequired,
    }).isRequired,
  })).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default SuccessStories;
