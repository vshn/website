import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';
import Link from 'components/shared/link';
import t from 'i18n';

import styles from './hero.module.scss';
import circles from './images/circles.svg';

const cx = classNames.bind(styles);

const Hero = ({ title, locale }) => {
  const links = t[locale].breadcrumbs;
  const breadcrumbs = [links.partners, links.successStories];
  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('crumbs-wrapper')}>
          {breadcrumbs.map((crumb, index) => (
            <Link className={cx('link')} to={crumb.link.url} key={index}>
              {crumb.link.title}
            </Link>
          ))}
          <span>{title}</span>
        </div>
        <Heading className={cx('title')} tag="h2" size="xxl" color="tertiary">{title}</Heading>
        <img className={cx('circles')} src={circles} alt="" aria-hidden />
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['de', 'en']).isRequired,
};

export default Hero;
