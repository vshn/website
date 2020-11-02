import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './content.module.scss';
import Interview from './interview';

import Facts from '../facts';

const cx = classNames.bind(styles);

const Content = ({ interview, facts }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <div className={cx('content')}>
        <p>
          The modern and OpenShift based platform will provide acrevis with a future-oriented
          foundation for further digitisation initiatives and combine security, stability and
          flexibility. It also enables acrevis to react quickly, easily and efficiently to customer
          requests and new market requirements and to integrate them into the existing system
          landscape. Thanks to the scalability of the new technology platform, future digitisation
          projects can be realised faster, easier and more cost-efficient. It also distinguishes the
          regional bank as an active player in the ongoing digitization of the financial sector.
        </p>
        <p>
          By using APPUiO and by containerizing the application, the deployment of acrevis was
          standardized. Due to the DevOps approach and the high degree of automation acrevis is now
          much faster on the market and can roll out new products and features for its customers.
          For acrevis it is clear: with VSHN, a competent partner was found who guarantees the
          operation of a secure and stable infrastructure.
        </p>
        <Interview {...interview} />
        <h3>About Acrevis Bank AG</h3>
        <p>
          <a href="/">Acrevis Bank AG</a>
          , a leading regional bank between Lake Constance and Lake Zurich, is
          positioning itself by systematically covering the market area and offering
          segment-specific services. Its core competencies lie in the financing of private real
          estate, investment advice, asset management and commercial business with SMEs, trade and
          industry and the self-employed.

        </p>
        <h3>About VSHN – The DevOps Company</h3>
        <p>
          VSHN was founded with the intention to fundamentally shake up the hosting market. As a
          lean startup, we focused on the operation of IT platforms through automation, agility and
          a continuous improvement process. Completely independent of location and without our own
          hardware, we operate extensive applications according to the DevOps principle agile and
          24/7 on any infrastructure, so that software developers can concentrate on their business
          and IT operations are relieved. VSHN (pronounced like “vision”) is the leading Swiss
          partner for DevOps, Docker, Kubernetes, OpenShift, Rancher & 24/7 Cloud Operations. Learn
          more on
          {' '}
          <a href="www.vshn.ch">www.vshn.ch</a>

        </p>
      </div>
      <div className={cx('info-wrapper')}>
        <Facts {...facts} />
      </div>
    </div>
  </section>
);

Content.propTypes = {
  interview: PropTypes.shape({
    avatar: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    byLine: PropTypes.string.isRequired,
  }).isRequired,
  facts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

export default Content;
