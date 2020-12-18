import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import PartnerInfo from 'components/shared/partner-info';

import styles from './content.module.scss';
import Facts from './facts';

import 'components/lazy-blocks/personal-card/personal-card.scss';

const cx = classNames.bind(styles);

const Content = ({ content, partnerPost: { acf: { logo, partnerInfo } }, facts }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={cx('info-wrapper')}>
        <PartnerInfo {...logo} {...partnerInfo} />
        <Facts {...facts} />
      </div>
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  partnerPost: PropTypes.shape({
    acf: PropTypes.shape({
      logo: PropTypes.shape({
        logoBackgroundColor: PropTypes.string.isRequired,
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
    }),
  }).isRequired,
  facts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      item: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Content;
