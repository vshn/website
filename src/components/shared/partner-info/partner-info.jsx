import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './partner-info.module.scss';

const cx = classNames.bind(styles);

const PartnerInfo = (props) => {
  const { logoBackgroundColor, logoImage, items, partnerLink: { url, title, target } } = props;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo-wrapper')} style={{ backgroundColor: `${logoBackgroundColor || '#f6f7f9'}` }}>
        {logoImage && (
          <GatsbyImage
            className={cx('logo')}
            fluid={logoImage.localFile.childImageSharp.fluid}
            alt=""
            aria-hidden
          />
        )}
      </div>
      <ul className={cx('items-wrapper')}>
        {items?.map(({ value, text }, index) => (
          <li className={cx('item')} key={index}>
            <strong>{value}</strong>
            <span>{text}</span>
          </li>
        ))}
      </ul>
      {url && title && (
      <div className={cx('link-wrapper')}>
        <Link className={cx('link')} to={url} target={target}>{title}</Link>
      </div>
      )}
    </div>
  );
};

PartnerInfo.propTypes = {
  logoBackgroundColor: PropTypes.string,
  logoImage: PropTypes.shape({
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
          sizes: PropTypes.string.isRequired,
        }),
      }),
    }),
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  partnerLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
  }),
};

PartnerInfo.defaultProps = {
  logoImage: null,
  logoBackgroundColor: null,
  items: {
    value: null,
    text: null,
  },
  partnerLink: null,
};

export default PartnerInfo;
