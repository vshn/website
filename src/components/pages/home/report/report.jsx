import classNames from "classnames/bind";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

import Button from "components/shared/button";
import Heading from "components/shared/heading";

import styles from "./report.module.scss";

const cx = classNames.bind(styles);

const Report = ({
  title,
  description,
  buttonLink: { url: buttonUrl, title: buttonText },
  image,
}) => (
  <section className={cx("wrapper")}>
    <div className={cx("container", "inner")}>
      <div className={cx("content")}>
        <Heading className={cx("title")} tag="h2" size="xl">
          {title}
        </Heading>
        <p className={cx("text")}>{description}</p>
        <Button to={buttonUrl}>{buttonText}</Button>
      </div>

      <div className={cx("illustration")} aria-hidden>
        <span className={cx("rectangle", "rectangle-1")} />
        <span className={cx("rectangle", "rectangle-2")} />
        <span className={cx("rectangle", "rectangle-3")} />
        <GatsbyImage className={cx("image")} image={image.gatsbyImage} alt="" />
      </div>
    </div>
  </section>
);
Report.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Report;
