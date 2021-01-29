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

const SOCIAL_ICONS = {
  twitter: Twitter,
  linkedin: LinkedIn,
  github: GitHub,
  gitlab: GitLab,
  facebook: Facebook,
  instagram: Instagram,
  youtube: YouTube,
};

const Footer = (props) => {
  const {
    socialLinks,
    footerMeta: { copyright, praiseBody },
    menuItems,
  } = props;
  // eslint-disable-next-line react/prop-types
  const SocialMenu = ({ className }) => (
    <ul className={cx('social-menu', className)}>
      {Object.entries(socialLinks).map(([key, value]) => {
        const company = key.replace(/Link/, '');
        const Icon = SOCIAL_ICONS[company];
        return (
          <li key={key} className={cx('social-menu-item')}>
            <a
              className={cx('social-menu-link', `social-menu-link_${company}`)}
              href={value}
              target="_blank"
            >
              <Icon />
            </a>
          </li>
        );
      })}
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
            <SocialMenu className={cx('md-hidden')} />
          </div>

          <nav className={cx('nav')}>
            <ul className={cx('menu')}>
              {menuItems.map(({ label, path }, index) => (
                <li className={cx('menu-item')} key={index}>
                  <Link className={cx('menu-link')} to={path}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialMenu className={cx('md-visible')} />
        </div>

        <div className={cx('bottom-section')}>
          <p className={cx('copyright')}>{copyright}</p>
          <p className={cx('praise')}>{praiseBody}</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  footerMeta: PropTypes.shape({
    praiseBody: PropTypes.string,
    copyright: PropTypes.string,
  }),
  socialLinks: PropTypes.shape({
    twitterLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    githubLink: PropTypes.string,
    gitlabLink: PropTypes.string,
    facebookLink: PropTypes.string,
    instagramLink: PropTypes.string,
    youtubeLink: PropTypes.string,
  }),
};

Footer.defaultProps = {
  menuItems: [],
  footerMeta: {
    praiseBody: '',
    copyright: '',
  },
  socialLinks: {
    facebookLink: '',
    githubLink: '',
    gitlabLink: '',
    instagramLink: '',
    linkedinLink: '',
    twitterLink: '',
    youtubeLink: '',
  },
};

export default Footer;
