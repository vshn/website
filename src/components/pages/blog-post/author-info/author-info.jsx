import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './author-info.module.scss';

const cx = classNames.bind(styles);

const AuthorInfo = ({
  acf: { avatar, fullName, email, number },
  description,
}) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <div className={cx('items-wrapper')}>
        <GatsbyImage
          className={cx('avatar')}
          fluid={avatar.localFile.childImageSharp.fluid}
        />
        <div className={cx('content')}>
          <Heading className={cx('name')} tag="h3" size="lg">
            {fullName}
          </Heading>
          <ul className={cx('links-wrapper')}>
            <li className={cx('link-wrapper')}>
              {/* <Link to={email.url}>{email.title}</Link> */}
            </li>
            <li className={cx('link-wrapper')}>
              {/* <Link to={number.url}>{number.title}</Link> */}
            </li>
          </ul>
          <p className={cx('description')}>{description}</p>
        </div>
      </div>
    </div>
  </section>
);

AuthorInfo.propTypes = {
  acf: PropTypes.shape({
    avatar: PropTypes.objectOf(PropTypes.any).isRequired,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default AuthorInfo;
