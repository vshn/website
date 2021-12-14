import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import PartnerInfo from 'components/shared/partner-info';

import styles from './content.module.scss';
import Facts from './facts';

import 'components/lazy-blocks/personal-card/personal-card.scss';

const cx = classNames.bind(styles);

const Content = ({ content, partnerInfo, facts }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={cx('info-wrapper')}>
        {partnerInfo?.partnerLink && (
        <PartnerInfo
          {...partnerInfo}
        />
        )}
        <Facts {...facts} />
      </div>
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  partnerInfo: PropTypes.shape({
    logoBackgroundColor: PropTypes.shape({}),
    partnerLink: PropTypes.shape({}),
  }),
  facts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      item: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

Content.defaultProps = {
  partnerInfo: null,
};

export default Content;
