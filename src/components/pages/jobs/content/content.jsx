import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import styles from './content.module.scss';

import 'components/lazy-blocks/rating-cards/rating-cards.scss';

const cx = classNames.bind(styles);
const SRC_URL = 'https://s3.eu-central-1.amazonaws.com/files-eu.freshteam.com/production/84595/attachments/25000068981/original/25000001952_widget.js?1627285000';

const Content = ({ content }) => (

  <section className={cx('wrapper')}>
    <Helmet script={[{ src: SRC_URL }]} />
    <div className={cx('container', 'inner')}>
      <div className={cx('widget')} id="freshteam-widget" />
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
