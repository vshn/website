import classNames from "classnames/bind";
import PropTypes from "prop-types";
import React from "react";

import Link from "components/shared/link";

import styles from "./technology-partners-list.module.scss";

const cx = classNames.bind(styles);

const TechnologyPartnersList = ({ technologyPartnersList }) => (
  <section className={cx("wrapper")}>
    <div className="container">
      <ul className={cx("items-wrapper")}>
        {technologyPartnersList.map(({ url, logo, name }, index) => (
          <li className={cx("item")} key={index}>
            <Link
              className={cx("link")}
              to={url}
              target="_blank"
              rel="noopener"
            >
              <div className={cx("logo-wrapper")}>
                {logo && (
                  <img
                    className={cx("logo")}
                    src={logo.mediaItemUrl}
                    alt=""
                    aria-hidden
                  />
                )}
              </div>
              <p className={cx("name")}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

TechnologyPartnersList.propTypes = {
  technologyPartnersList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      logo: PropTypes.objectOf(PropTypes.any),
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TechnologyPartnersList;
