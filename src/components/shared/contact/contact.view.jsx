import classNames from "classnames/bind";
import PropTypes from "prop-types";
import React from "react";

import Button from "components/shared/button";
import Heading from "components/shared/heading";
import getTextWithoutParagraph from "utils/get-text-without-paragraph";

import styles from "./contact.module.scss";
import backgroundImage from "./images/background-image.svg";

const cx = classNames.bind(styles);

const Contact = ({ title, description, buttonText, buttonUrl }) => (
  <section className={cx("wrapper")}>
    <div className={cx("container", "inner")}>
      <Heading
        className={cx("title")}
        tag="h2"
        size="xl"
        innerHTML={getTextWithoutParagraph(title)}
      />
      <p className={cx("description")}>{description}</p>
      <Button to={buttonUrl}>{buttonText}</Button>
    </div>

    <img
      className={cx("background-image")}
      src={backgroundImage}
      alt=""
      loading="lazy"
      aria-hidden
    />
  </section>
);

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Contact;
