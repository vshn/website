import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';

import styles from './content.module.scss';

import 'components/lazy-blocks/rating-cards/rating-cards.scss';

const cx = classNames.bind(styles);
const SRC_URL = 'https://s3.eu-central-1.amazonaws.com/files-eu.freshteam.com/production/84595/attachments/25000068981/original/25000001952_widget.js?1627285000';

const Content = ({ content }) => {
  const [sectionRef, inView] = useInView({ triggerOnce: true });
  return (
    <section className={cx('wrapper')}>
      <div ref={sectionRef} className={cx('container', 'inner')}>
        <div className={cx('widget')} id="freshteam-widget" />
        <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {inView && (
      <Helmet
        script={[{ src: SRC_URL }]}
      />
      )}
    </section>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
