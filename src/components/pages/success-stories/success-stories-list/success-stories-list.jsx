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
        {successStories
          .sort((a, b) => (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase() ? 1 : -1))
          .map(({ uri: url, title, acf: { logo: { localFile } } }, index) => (
            <li className={cx('item')} key={index}>

              <Link className={cx('link')} to={url}>
                <div className={cx('logo-wrapper')}>
                  {localFile?.childImageSharp?.fluid ? (
                    <GatsbyImage
                      className={cx('logo')}
                      style={{ maxHeight: '80px' }}
                      imgStyle={{ objectFit: 'contain' }}
                      fluid={localFile.childImageSharp.fluid}
                      alt={`${title} logo`}
                    />
                  ) : (
                    <img
                      className={cx('logo')}
                      style={{ maxHeight: '80px' }}
                      src={localFile.publicURL}
                      alt={`${title} logo`}
                    />
                  )}
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
      logo: PropTypes.objectOf(PropTypes.any).isRequired,
    }).isRequired,
  })).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default SuccessStoriesList;
