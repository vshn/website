import classNames from 'classnames/bind';
import React from 'react';

import Link from 'components/shared/link';

import styles from './sub-sub-menu.module.scss';

const cx = classNames.bind(styles);

const SubSubMenu = ({ items }) => (
  <ul className={cx('container')}>
    {items.map(({ label, path }, index) => (
      <li key={index}>
        <Link to={path}>{label}</Link>
      </li>
    ))}
  </ul>
);

export default SubSubMenu;
