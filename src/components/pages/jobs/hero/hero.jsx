import classNames from "classnames/bind";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

import Breadcrumbs from "components/shared/breadcrumbs";
import Heading from "components/shared/heading";

import styles from "./hero.module.scss";

const cx = classNames.bind(styles);

const Hero = ({ breadcrumbs, title, image }) => (
  <section className={cx("wrapper")}>
    <div className={cx("wrapper-inner")}>
      <div className={cx("container", "inner")}>
        {breadcrumbs?.length > 0 && (
          <Breadcrumbs currentPageTitle={title} crumbs={breadcrumbs} />
        )}
        <Heading className={cx("title")} tag="h1" size="xl">
          {title}
        </Heading>
      </div>
    </div>
    {image?.gatsbyImage && (
      <div className={cx("image-wrapper")}>
        <GatsbyImage
          className={cx("image")}
          imgStyle={{ objectFit: "contain" }}
          image={image.gatsbyImage}
          alt=""
        />
      </div>
    )}
  </section>
);

Hero.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

Hero.defaultProps = {
  breadcrumbs: [],
};

export default Hero;
