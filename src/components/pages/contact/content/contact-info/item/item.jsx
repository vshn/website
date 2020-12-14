import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ icon: { localFile: { publicURL: iconUrl } }, title, description, link }) => (
  <div className={cx('wrapper')}>
    <span className={cx('icon-wrapper')}>
      <img src={iconUrl} className={cx('icon')} alt="" />
    </span>
    <Heading tag="h4" size="lg">{title}</Heading>
    <p className={cx('description')}>{description}</p>
    {link && <Link className={cx('link')} to={link.url} target={link.target}>{link.title}</Link>}
  </div>
);

Item.propTypes = {
  icon: PropTypes.shape({
    localFile: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

Item.defaultProps = {
  link: null,
};

export default Item;
