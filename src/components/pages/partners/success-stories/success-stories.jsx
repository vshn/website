import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import acrevis from '../images/acrevis.svg';
import creditgate24 from '../images/creditgate24.svg';
import esurance from '../images/esurance.svg';
import hrmsystems from '../images/hrmsystems.svg';
import neon from '../images/neon.svg';
import skribble from '../images/skribble.svg';
import sobrado from '../images/sobrado.svg';

import styles from './success-stories.module.scss';

const cx = classNames.bind(styles);

const SuccessStories = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2" size="xl" color="primary">{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {items.map(({ url, name, logo, footerText }, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('link')} to={url}>
              <div className={cx('logo-wrapper')}>
                <img className={cx('logo')} src={logo} alt={`${name} logo`} />
              </div>
              <span className={cx('footer-text')}>{footerText}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

SuccessStories.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
  })),
};

SuccessStories.defaultProps = {
  items: [
    {
      url: '/',
      name: 'Acrevis',
      logo: acrevis,
      footerText: 'Success story',
    },
    {
      url: '/',
      name: 'Esurance',
      logo: esurance,
      footerText: 'Success story',
    },
    {
      url: '/',
      name: 'HRM Systems',
      logo: hrmsystems,
      footerText: 'Success story',
    },
    {
      url: '/',
      name: 'Skribble',
      logo: skribble,
      footerText: 'Success story',
    },
    {
      url: '/',
      name: 'Sobrado',
      logo: sobrado,
      footerText: 'Success story',
    },
    {
      url: '/',
      name: 'Neon',
      logo: neon,
      footerText: 'Success story',
    },
    {
      url: '/',
      name: 'CreditGate24',
      logo: creditgate24,
      footerText: 'Success story',
    },
  ],
};

export default SuccessStories;
