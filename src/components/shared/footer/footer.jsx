import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';

import Facebook from 'icons/facebook.inline.svg';
import GitHub from 'icons/github.inline.svg';
import Instagram from 'icons/instagram.inline.svg';
import LinkedIn from 'icons/linkedin.inline.svg';
import Twitter from 'icons/twitter.inline.svg';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = (props) => {
  const {
    menuItems,
    facebookUrl,
    githubUrl,
    instagramUrl,
    linkedinUrl,
    twitterUrl,
    design,
    address,
    copyright,
  } = props;

  return (
    <footer className={cx('wrapper')}>
      <div className="container">
        <div className={cx('section')}>
          <div className={cx('other-links')}>
            <Link to="/">
              <Logo className={cx('logo')} />
            </Link>

            <ul className={cx('social-menu')}>
              <li>
                <Link className={cx('social-menu-link', 'social-menu-link_twitter')} to={twitterUrl}><Twitter /></Link>
              </li>
              <li>
                <Link className={cx('social-menu-link', 'social-menu-link_facebook')} to={facebookUrl}><Facebook /></Link>
              </li>
              <li>
                <Link className={cx('social-menu-link', 'social-menu-link_linkedin')} to={linkedinUrl}><LinkedIn /></Link>
              </li>
              <li>
                <Link className={cx('social-menu-link', 'social-menu-link_github')} to={githubUrl}><GitHub /></Link>
              </li>
              <li>
                <Link className={cx('social-menu-link', 'social-menu-link_instagram')} to={instagramUrl}><Instagram /></Link>
              </li>
            </ul>
          </div>

          <nav className={cx('nav')}>
            <ul className={cx('menu')}>
              {menuItems.map(({ label, childItems }, index) => (
                <li key={index}>
                  <Heading className={cx('heading')} tag="h3" size="md" color="quaternary">{label}</Heading>
                  <ul className={cx('sub-menu')}>
                    {childItems.map(({ label, path }, index) => (
                      <li key={index}>
                        <Link className={cx('sub-menu-link')} to={path}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={cx('section')}>
          <p className={cx('design')} dangerouslySetInnerHTML={{ __html: design }} />
          <address className={cx('address')}>{address}</address>
          <span className={cx('copyright')}>{copyright}</span>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    childItems: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })),
  })),
  facebookUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  design: PropTypes.string,
  address: PropTypes.string,
  copyright: PropTypes.string,
};

Footer.defaultProps = {
  menuItems: [
    {
      label: 'Company',
      childItems: [
        {
          label: 'Solutions',
          path: '/solutions',
        },
        {
          label: 'Products',
          path: '/products',
        },
        {
          label: 'Technologies',
          path: '/technologies',
        },
      ],
    },
    {
      label: 'About',
      childItems: [
        {
          label: 'About us',
          path: '/about',
        },
        {
          label: 'Jobs',
          path: '/jobs',
        },
        {
          label: 'Blog',
          path: '/blog',
        },
      ],
    },
    {
      label: 'Legal',
      childItems: [
        {
          label: 'GTC',
          path: '/gtc',
        },
        {
          label: 'Imprint',
          path: '/imprint',
        },
        {
          label: 'Privacy policy',
          path: '/privacy',
        },
      ],
    },
    {
      label: 'Contact us',
      childItems: [
        {
          label: 'Contact',
          path: '/contact',
        },
        {
          label: 'info@vshn.ch',
          path: 'mailto:info@vshn.ch',
        },
        {
          label: '+41 44 545 53 00',
          path: 'tel:+41 44 545 53 00',
        },
      ],
    },
  ],
  facebookUrl: 'https://facebook.com',
  githubUrl: 'https://github.com',
  instagramUrl: 'https://instagram.com',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://twitter.com',
  design: 'Creative design made by <a href="https://pixelpoint.io/">Pixel Point</a>',
  address: 'AG Neugasse 10, CH-8005, Zürich, Switzerland',
  copyright: '© 2020 VSHN AG',
};

export default Footer;
