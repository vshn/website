import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './technology-partners-list.module.scss';

const cx = classNames.bind(styles);

const TechnologyPartnersList = ({ technologyPartnersList }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <ul className={cx('items-wrapper')}>
        {technologyPartnersList.map(({ url, logo, name }, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('link')} to={url} target="_blank" rel="noopener">
              <img className={cx('logo')} src={logo.localFile.publicURL} alt="" aria-hidden />
              <p className={cx('name')}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

TechnologyPartnersList.propTypes = {
  technologyPartnersList: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    logo: PropTypes.shape({
      localFile: PropTypes.shape({
        publicURL: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  })),
};

export default TechnologyPartnersList;
