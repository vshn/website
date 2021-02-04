import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import NoAvatar from 'icons/no-avatar.inline.svg';

import styles from './author-info.module.scss';

const cx = classNames.bind(styles);

const AuthorInfo = ({
  firstName, lastName,
  acf: { avatar },
  description,
}) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <div className={cx('items-wrapper')}>
        {avatar?.localFile ? (
          <GatsbyImage
            className={cx('avatar')}
            fluid={avatar.localFile.childImageSharp.fluid}
          />
        ) : <NoAvatar className={cx('no-avatar')} />}
        <div className={cx('content')}>
          <Heading className={cx('name')} tag="h3" size="lg">
            {`${firstName} ${lastName}`}
          </Heading>
          <p className={cx('description')}>{description}</p>
        </div>
      </div>
    </div>
  </section>
);

AuthorInfo.propTypes = {
  acf: PropTypes.shape({
    avatar: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AuthorInfo;
