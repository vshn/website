import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './partner-info.module.scss';

const cx = classNames.bind(styles);

const PartnerInfo = (props) => {
  const {
    logoBackgroundColor,
    logoImage,
    items,
    partnerLink,
  } = props;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo-wrapper')} style={{ backgroundColor: `${logoBackgroundColor || '#f6f7f9'}` }}>
        {logoImage?.localFile?.childImageSharp && (
          <GatsbyImage
            className={cx('logo')}
            fluid={logoImage.localFile.childImageSharp.fluid}
            alt=""
          />
        )}
        {logoImage?.localFile?.publicURL && <img src={logoImage.localFile.publicURL} alt="" />}
      </div>
      <ul className={cx('items-wrapper')}>
        {items?.map(({ value, text }, index) => (
          <li className={cx('item')} key={index}>
            <strong>{value}</strong>
            <span>{text}</span>
          </li>
        ))}
      </ul>
      {partnerLink?.url && partnerLink?.title && (
      <div className={cx('link-wrapper')}>
        <Link className={cx('link')} to={partnerLink.url} target={partnerLink.target}>{partnerLink.title}</Link>
      </div>
      )}
    </div>
  );
};

PartnerInfo.propTypes = {
  logoBackgroundColor: PropTypes.string,
  logoImage: PropTypes.shape({
    localFile: PropTypes.shape({
      publicURL: PropTypes.string,
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
    url: PropTypes.string,
    title: PropTypes.string,
    target: PropTypes.string,
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
