import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';
import Link from 'components/shared/link';
import t from 'i18n';

import styles from './hero.module.scss';
import backgroundImage from './images/background-image.svg';

const cx = classNames.bind(styles);
const Hero = ({ title, description, locale }) => {
  const { breadcrumbs } = t[locale].partner;
  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('crumbs-wrapper')}>
          {breadcrumbs.map((crumb, index) => (
            <Link className={cx('crumb')} to={crumb.breadcrumbSlug} key={index}>
              {crumb.breadcrumbRoot}
            </Link>
          ))}
          <span>{title}</span>
        </div>
        <Heading className={cx('title')} tag="h1" size="xxl" innerHTML={title} />
        <p className={cx('description')}>{description}</p>
      </div>
      <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

export default Hero;
