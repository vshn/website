import classNames from "classnames/bind";
import PropTypes from "prop-types";
import React from "react";

import Button from "components/shared/button";
import Heading from "components/shared/heading";

import backgroundImage from "./images/background-image.svg";
import styles from "./jobs.module.scss";

const cx = classNames.bind(styles);

const Jobs = ({
  title,
  description,
  buttonLink: { url: buttonUrl, title: buttonText },
}) => (
  <section className={cx("wrapper")}>
    <div className={cx("container", "inner")}>
      <Heading
        className={cx("title")}
        tag="h2"
        size="xl"
        color="tertiary"
        highlightedWordsColor="secondary"
        innerHTML={title}
      />
      <p className={cx("description")}>{description}</p>
      <Button to={buttonUrl}>{buttonText}</Button>
    </div>
    <img
      className={cx("background-image")}
      src={backgroundImage}
      loading="lazy"
      alt=""
      aria-hidden
    />
  </section>
);

Jobs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Jobs;
