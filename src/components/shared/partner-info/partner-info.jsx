import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './partner-info.module.scss';

const cx = classNames.bind(styles);

const PartnerInfo = ({ logoBackgroundColor, logoImage, items, partnerLink: { url, title } }) => (
  <div className={cx('wrapper')}>
    <div className={cx('logo-wrapper')} style={{ backgroundColor: `${logoBackgroundColor}` }}>
      <GatsbyImage className={cx('logo')} fluid={logoImage.localFile.childImageSharp.fluid} alt="" aria-hidden />
    </div>
    <ul className={cx('items-wrapper')}>
      {items.map(({ value, text }, index) => (
        <li className={cx('item')} key={index}>
          <strong>{value}</strong>
          <span>{text}</span>
        </li>
      ))}
    </ul>
    <div className={cx('link-wrapper')}>
      <Link className={cx('link')} to={url}>{title}</Link>
    </div>
  </div>
);

PartnerInfo.propTypes = {
  logoBackgroundColor: PropTypes.string.isRequired,
  logoImage: PropTypes.objectOf(PropTypes.any).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  partnerLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PartnerInfo;
