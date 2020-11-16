import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import SuccessStoryCard from 'components/pages/partner/content/success-story-card';
import PartnerInfo from 'components/shared/partner-info';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ content, acf: { logo, partnerInfo, successStoryCard }, locale }) => (
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
  acf: PropTypes.shape({
    logo: PropTypes.shape({
      logoBackgroundColor: PropTypes.string.isRequired,
      logoImage: PropTypes.objectOf(PropTypes.any).isRequired,
    }),
    partnerInfo: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }),
      ).isRequired,
      partnerLink: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    successStoryCard: PropTypes.shape({
      successStory: PropTypes.shape({
        title: PropTypes.string.isRequired,
        acf: PropTypes.shape({
          category: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }),
        uri: PropTypes.string.isRequired,
      }).isRequired,
      footerText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

export default Content;
