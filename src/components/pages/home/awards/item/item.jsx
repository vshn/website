import classNames from "classnames/bind";
import PropTypes from "prop-types";
import React, { useState } from "react";

import Heading from "components/shared/heading";
import Link from "components/shared/link";

import Confetti from "./confetti";
import styles from "./item.module.scss";

const cx = classNames.bind(styles);

const Item = ({
  imageName,
  title,
  description,
  link: { url },
  itemFooterText,
  itemImages,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const image = itemImages[imageName];

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <li className={cx("wrapper")}>
      <Link
        className={cx("inner")}
        to={url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={cx("image")}
          src={image}
          alt=""
          loading="lazy"
          aria-hidden
        />
        <div className={cx("content")}>
          <Heading className={cx("title")} tag="h3" size="lg" color="tertiary">
            {title}
          </Heading>
          <p className={cx("description")}>{description}</p>
          <span className={cx("read-more")}>{itemFooterText}</span>
        </div>
      </Link>

      <Confetti isHovered={isHovered} />
    </li>
  );
};

Item.propTypes = {
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  itemFooterText: PropTypes.string.isRequired,
  itemImages: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Item;
