/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

import Link from "components/shared/link";

import styles from "./partner-info.module.scss";

const cx = classNames.bind(styles);

const Logo = ({ logoImage }) => {
  if (logoImage?.gatsbyImage) {
    return (
      <GatsbyImage
        className={cx("logo")}
        image={logoImage.gatsbyImage}
        alt=""
      />
    );
  }
  if (logoImage?.mediaItemUrl) {
    return <img className={cx("logo")} src={logoImage.mediaItemUrl} alt="" />;
  }
  return null;
};

const PartnerInfo = (props) => {
  const { logoBackgroundColor, logoImage, items, partnerLink } = props;
  return (
    <div className={cx("wrapper")}>
      <div
        className={cx("logo-wrapper")}
        style={{ backgroundColor: `${logoBackgroundColor || "#f6f7f9"}` }}
      >
        <Logo logoImage={logoImage} />
      </div>
      <ul className={cx("items-wrapper")}>
        {items?.map(({ value, text }, index) => (
          <li className={cx("item")} key={index}>
            <strong>{value}</strong>
            <span>{text}</span>
          </li>
        ))}
      </ul>
      {partnerLink?.url && partnerLink?.title && (
        <div className={cx("link-wrapper")}>
          <Link
            className={cx("link")}
            to={partnerLink.url}
            target={partnerLink.target}
          >
            {partnerLink.title}
          </Link>
        </div>
      )}
    </div>
  );
};

PartnerInfo.propTypes = {
  logoBackgroundColor: PropTypes.string,
  logoImage: PropTypes.objectOf(PropTypes.any),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })
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
