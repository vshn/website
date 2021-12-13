import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import PartnerInfo from 'components/shared/partner-info';

import styles from './content.module.scss';
import Facts from './facts';

import 'components/lazy-blocks/personal-card/personal-card.scss';

const cx = classNames.bind(styles);

const Content = ({ content, logo, partnerInfo, logoBackgroundColor, facts }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={cx('info-wrapper')}>
        {partnerInfo && (
        <PartnerInfo
          logoImage={logo}
          logoBackgroundColor={logoBackgroundColor}
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
  logoBackgroundColor: PropTypes.string,
  logo: PropTypes.shape({}),
  partnerInfo: PropTypes.shape({}),
  facts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      item: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

Content.defaultProps = {
  logo: null,
  partnerInfo: null,
  logoBackgroundColor: null,
};

export default Content;
