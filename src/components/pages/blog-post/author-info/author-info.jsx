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
  acf: { avatar, descriptionDe, descriptionEn },
  locale,
}) => {
  const description = {
    en: descriptionEn,
    de: descriptionDe,
  };
  return (
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
            <p className={cx('description')}>{description[locale]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
AuthorInfo.propTypes = {
  acf: PropTypes.shape({
    avatar: PropTypes.objectOf(PropTypes.any),
    descriptionEn: PropTypes.string.isRequired,
    descriptionDe: PropTypes.string.isRequired,
  }).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

export default AuthorInfo;
