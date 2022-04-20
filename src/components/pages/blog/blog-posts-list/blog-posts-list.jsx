import classNames from "classnames/bind";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

import Heading from "components/shared/heading";
import Link from "components/shared/link";
import translations from "i18n";

import styles from "./blog-posts-list.module.scss";
import shape from "./images/shape.svg";
import Item from "./item";

const cx = classNames.bind(styles);

const BlogPostList = ({
  locale,
  posts,
  banner: { bannerCover, bannerTitle, bannerLink },
}) => {
  let banner = null;
  const hasBanner = bannerCover && bannerTitle && bannerLink;
  // show gray shape only if page is full of posts
  const hasDecoration = posts.length === 20;
  if (hasBanner) {
    banner = (
      <div className={cx("illustration")} aria-hidden>
        <Link className={cx("banner")} to={bannerLink}>
          <GatsbyImage
            className={cx("banner-image")}
            image={bannerCover.gatsbyImage}
            alt=""
          />
          <div className={cx("banner-overlay")} />
          <Heading
            className={cx("banner-title")}
            tag="h4"
            size="lg"
            color="tertiary"
          >
            {bannerTitle}
          </Heading>
        </Link>
      </div>
    );
  }
  return (
    <div className={cx("wrapper")}>
      <div className="container">
        <div className={cx("items-wrapper", { "has-banner": hasBanner })}>
          {posts.map((post) => (
            <Item
              {...post}
              ctaButtonText={translations[locale].blog.postCtaButton}
              key={post.uri}
            />
          ))}
        </div>

        {banner}
      </div>
      {hasDecoration && (
        <img className={cx("shape")} src={shape} alt="" aria-hidden />
      )}
    </div>
  );
};
BlogPostList.propTypes = {
  locale: PropTypes.oneOf(["en", "de"]).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
    })
  ).isRequired,
  banner: PropTypes.shape({
    bannerLink: PropTypes.string.isRequired,
    bannerTitle: PropTypes.string.isRequired,
    bannerCover: PropTypes.objectOf(PropTypes.any).isRequired,
  }),
};

BlogPostList.defaultProps = {
  banner: {},
};

export default BlogPostList;
