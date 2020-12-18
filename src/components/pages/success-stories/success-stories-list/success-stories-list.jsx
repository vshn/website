import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './success-stories-list.module.scss';

const cx = classNames.bind(styles);

const SuccessStoriesList = ({ itemFooterText, successStories }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <ul className={cx('items-wrapper')}>
        {successStories.map(({ uri: url, title, acf: { logo } }, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('link')} to={url}>
              <div className={cx('logo-wrapper')}>
                <img
                  className={cx('logo')}
                  src={logo.localFile.publicURL}
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

SuccessStoriesList.propTypes = {
  successStories: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    acf: PropTypes.shape({
      logo: PropTypes.shape({
        localFile: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default SuccessStoriesList;
