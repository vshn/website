import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import motionFadeAnimation from 'constants/motion-fade-animation';

import styles from './details.module.scss';

const cx = classNames.bind(styles);

const Details = ({ title, content }) => (
  <motion.div className={cx('wrapper')} {...motionFadeAnimation}>
    <div className={cx('inner')}>
      <Heading className={cx('title')} size="lg">{title}</Heading>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>

    <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
    <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
    <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
    <span className={cx('rectangle', 'rectangle-4')} aria-hidden />
  </motion.div>
);

Details.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Details;
