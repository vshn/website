import classNames from "classnames/bind";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

import Heading from "components/shared/heading";
import Link from "components/shared/link";
import getLocaleDateNames from "utils/locale-date-names";

import styles from "./card-item.module.scss";

const cx = classNames.bind(styles);

const CardItem = ({
  title,
  acf: {
    link,
    logo,
    schedule: { startDate },
  },
  itemFooterText,
}) => {
  const { day, month } = getLocaleDateNames(startDate);
  return (
    <li className={cx("wrapper")}>
      <Link className={cx("inner")} to={link}>
        <div className={cx("date")}>
          <span className={cx("day")}>{day}</span>
          {month}
        </div>
        <div className={cx("image-wrapper")}>
          {logo?.gatsbyImage ? (
            <GatsbyImage image={logo.gatsbyImage} alt="" />
          ) : (
            <img
              src={logo.mediaItemUrl}
              className={cx("image")}
              loading="lazy"
            />
          )}
        </div>
        <div className={cx("content")}>
          <Heading className={cx("title")} tag="h3" size="lg">
            {title}
          </Heading>
          <span className={cx("learn-more")}>{itemFooterText}</span>
        </div>
      </Link>
    </li>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    link: PropTypes.string.isRequired,
    logo: PropTypes.objectOf(PropTypes.any).isRequired,
    description: PropTypes.string.isRequired,
    schedule: PropTypes.shape({
      startDate: PropTypes.string.isRequired,
    }),
  }).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default CardItem;
