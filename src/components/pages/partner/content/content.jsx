import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import PartnerInfo from 'components/shared/partner-info';
import SuccessStoriesCard from 'components/shared/success-stories-card';
import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ partnerInfo, story }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <div className={cx('content')}>
        <h2>VSHN and Puzzle ITC support acrevis bank on the way to digitalization</h2>
        <p>
          After an intensive evaluation and detailing phase, acrevis decided on a partnership with
          VSHN and Puzzle ITC for the implementation, realization and operation of IT platforms.
          Together we will develop a technology platform, which enables acrevis to use two-speed IT.
          In addition, it distinguishes the regional bank as an active player in the ongoing
          digitalization of the financial sector.

        </p>
        <p>Michael Steiner, CEO of acrevis Bank:</p>
        <blockquote>
          <p>
            We are starting small and want to grow consistently and jointly with the needs of our
            customers and the bank.
          </p>
        </blockquote>
        <p>
          The modern platform will provide acrevis with a future-oriented foundation for further
          digitization initiatives and combine security, stability and flexibility. It also enables
          acrevis to react quickly, easily and efficiently to customer wishes and new market
          requirements and to integrate them into the existing system landscape. Thanks to the
          scalability of the new technology platform, future digitization projects can be realized
          more quickly, easily and cost-effectively.
        </p>
        <p>
          Acrevis is an exciting customer for VSHN and Puzzle ITC in the banking sector. We are
          very pleased to be able to support acrevis in its pursuit of an offensive digital strategy
          and look forward to a successful cooperation.
        </p>
      </div>
      <div className={cx('info-wrapper')}>
        <PartnerInfo {...partnerInfo} />
        <SuccessStoriesCard {...story} />
      </div>
    </div>

  </div>
);

Content.propTypes = {
  partnerInfo: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
    url: PropTypes.string.isRequired,
  }).isRequired,
  story: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footerUrl: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Content;
