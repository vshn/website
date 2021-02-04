import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import NoAvatar from 'icons/no-avatar.inline.svg';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ name, acf: { image, jobTitle, jobPosition, socialLinks }, icons }) => (
  <div className={cx('item-wrapper')}>
    <div className={cx('image-wrapper')}>
      {image
        ? <GatsbyImage className={cx('image')} fluid={image.localFile.childImageSharp.fluid} />
        : <NoAvatar className={cx('no-avatar')} />}
    </div>
    <div className={cx('content')}>
      <div className={cx('details')}>
        <span className={cx('job-title')}>{jobTitle}</span>
        <Heading className={cx('name')} tag="h4" size="lg">{name}</Heading>
        <span className={cx('job-position')}>{jobPosition}</span>
      </div>
      <ul className={cx('social-links')}>
        {Object.entries(socialLinks).map(([key, value], index) => {
          const company = key.replace(/Link/g, '');
          const Icon = icons[company];
          if (!value) {
            return null;
          }
          let link;
          if (company === 'email') {
            link = `mailto:${value}`;
          } else {
            link = value;
          }
          return (
            <li key={index} className={cx('social-link-wrapper')}>
              <a
                className={cx('social-link', `social-link_${company}`)}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    image: PropTypes.shape({
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
            sizes: PropTypes.string.isRequired,
            aspectRatio: PropTypes.number.isRequired,
          }),
        }),
      }),
    }),
    jobTitle: PropTypes.string.isRequired,
    jobPosition: PropTypes.string,
    socialLinks: PropTypes.shape({
      email: PropTypes.string,
      key: PropTypes.string,
      sshKey: PropTypes.string,
      twitterLink: PropTypes.string,
      linkedinLink: PropTypes.string,
      xingLink: PropTypes.string,
      githubLink: PropTypes.string,
      personalLink: PropTypes.string,
    }),
  }).isRequired,
  icons: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Item;
