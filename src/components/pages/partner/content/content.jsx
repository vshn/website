import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import SuccessStoryCard from 'components/pages/partner/content/success-story-card';
import PartnerInfo from 'components/shared/partner-info';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ content, logo, partnerInfo, successStoryCard, locale }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={cx('info-wrapper')}>
        <PartnerInfo {...logo} {...partnerInfo} />
        {successStoryCard.successStory
        && <SuccessStoryCard {...successStoryCard} locale={locale} />}
      </div>
    </div>

  </div>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    logoBackgroundColor: PropTypes.string,
    logoImage: PropTypes.shape({
      localFile: PropTypes.shape({
        publicURL: PropTypes.string,
      }),
    }),
  }),
  partnerInfo: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
    partnerLink: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
    }).isRequired,
  }),
  successStoryCard: PropTypes.shape({
    successStory: PropTypes.shape({
      title: PropTypes.string.isRequired,
      acf: PropTypes.shape({
        description: PropTypes.string.isRequired,
      }),
      footerUrl: PropTypes.string.isRequired,
    }),
    footerText: PropTypes.string.isRequired,
  }),
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

Content.defaultProps = {
  logo: {
    logoImage: null,
    logoBackgroundColor: null,
  },
  partnerInfo: {
    items: null,
  },
  successStoryCard: {
    successStory: null,
  },
};

export default Content;
