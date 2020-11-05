import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import Facebook from 'icons/facebook.inline.svg';
import GitHub from 'icons/github.inline.svg';
import GitLab from 'icons/gitlab.inline.svg';
import Instagram from 'icons/instagram.inline.svg';
import LinkedIn from 'icons/linkedin.inline.svg';
import Twitter from 'icons/twitter.inline.svg';
import YouTube from 'icons/youtube.inline.svg';
import Logo from 'images/logo.inline.svg';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = (props) => {
  const {
    menuItems,
    facebookUrl,
    githubUrl,
    gitlabUrl,
    instagramUrl,
    linkedinUrl,
    twitterUrl,
    youtubeUrl,
    design,
    address,
  } = props;

  // eslint-disable-next-line react/prop-types
  const SocialMenu = ({ className }) => (
    <ul className={cx('social-menu', className)}>
      <li className={cx('social-menu-item')}>
        <Link className={cx('social-menu-link', 'social-menu-link_twitter')} to={twitterUrl}><Twitter /></Link>
      </li>
      <li className={cx('social-menu-item')}>
        <Link className={cx('social-menu-link', 'social-menu-link_linkedin')} to={linkedinUrl}><LinkedIn /></Link>
      </li>
      <li className={cx('social-menu-item')}>
        <Link className={cx('social-menu-link', 'social-menu-link_github')} to={githubUrl}><GitHub /></Link>
      </li>
      <li className={cx('social-menu-item')}>
        <Link className={cx('social-menu-link', 'social-menu-link_gitlab')} to={gitlabUrl}><GitLab /></Link>
      </li>
      <li className={cx('social-menu-item')}>
        <Link className={cx('social-menu-link', 'social-menu-link_facebook')} to={facebookUrl}><Facebook /></Link>
      </li>
      <li className={cx('social-menu-item')}>
        <Link className={cx('social-menu-link', 'social-menu-link_instagram')} to={instagramUrl}><Instagram /></Link>
      </li>
      <li className={cx('social-menu-item')}>
        <Link className={cx('social-menu-link', 'social-menu-link_youtube')} to={youtubeUrl}><YouTube /></Link>
      </li>
    </ul>
  );

  return (
    <footer className={cx('wrapper')}>
      <div className="container">
        <div className={cx('top-section')}>
          <div className={cx('other-links')}>
            <Link to="/">
              <Logo className={cx('logo')} />
            </Link>

            <SocialMenu className={cx('lg-hidden')} />
          </div>

          <nav className={cx('nav')}>
            <ul className={cx('menu')}>
              {menuItems.map(({ childItems }, index) => (
                <li className={cx('menu-item')} key={index}>
                  <ul className={cx('sub-menu')}>
                    {childItems.map(({ label, path }, index) => (
                      <li className={cx('sub-menu-item')} key={index}>
                        <Link className={cx('sub-menu-link')} to={path}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={cx('bottom-section')}>
          <SocialMenu className={cx('lg-visible')} />
          <address className={cx('address')}>{address}</address>
          <p className={cx('design')} dangerouslySetInnerHTML={{ __html: design }} />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    childItems: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })),
  })),
  facebookUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  gitlabUrl: PropTypes.string,
  instagramUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  youtubeUrl: PropTypes.string,
  design: PropTypes.string,
  address: PropTypes.string,
};

Footer.defaultProps = {
  menuItems: [
    {
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
          label: 'Learn',
          path: '/learn',
        },
      ],
    },
    {
      childItems: [
        {
          label: 'Partners',
          path: '/partners',
        },
        {
          label: 'Blog',
          path: '/blog',
        },
        {
          label: 'About',
          path: '/about',
        },
      ],
    },
    {
      childItems: [
        {
          label: 'Contact',
          path: '/contact',
        },
        {
          label: 'Support',
          path: '/support',
        },
        {
          label: 'GTC',
          path: '/gtc',
        },
      ],
    },
    {
      childItems: [
        {
          label: 'Imprint',
          path: '/imprint',
        },
        {
          label: 'Privacy Policy',
          path: '/privacy-policy',
        },
      ],
    },
  ],
  facebookUrl: 'https://facebook.com',
  githubUrl: 'https://github.com',
  gitlabUrl: 'https://gitlab.com',
  instagramUrl: 'https://instagram.com',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://twitter.com',
  youtubeUrl: 'https://youtube.com',
  design: 'Creative design made by <a href="https://pixelpoint.io/">Pixel Point</a>',
  address: '© 2020 VSHN. AG Neugasse 10, CH-8005, Zürich, Switzerland',
};

export default Footer;
