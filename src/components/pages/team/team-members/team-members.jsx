import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Email from 'icons/email.inline.svg';
import Github from 'icons/github.inline.svg';
import Key from 'icons/key.inline.svg';
import LinkedIn from 'icons/linkedin.inline.svg';
import Lock from 'icons/lock.inline.svg';
import Twitter from 'icons/twitter.inline.svg';
import Xing from 'icons/xing.inline.svg';

import Item from './item';
import styles from './team-members.module.scss';

const cx = classNames.bind(styles);

const SOCIAL_ICONS = {
  email: Email,
  lock: Lock,
  key: Key,
  twitter: Twitter,
  linkedin: LinkedIn,
  xing: Xing,
  github: Github,
};

const TeamMembers = ({ items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <div className={cx('list')}>
        {items.map((item, index) => (
          <Item icons={SOCIAL_ICONS} key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

TeamMembers.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
};

export default TeamMembers;
