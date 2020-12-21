import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';
import Link from 'components/shared/link';
import t from 'i18n';

import styles from './hero.module.scss';
import backgroundImage from './images/background-image.svg';

const cx = classNames.bind(styles);
const Hero = ({ title, locale }) => {
  const links = t[locale].breadcrumbs;
  const breadcrumbs = [links.partners, links.clients];
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
        <Heading className={cx('title')} tag="h1" size="xxl" innerHTML={title} />
      </div>
      <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

export default Hero;
