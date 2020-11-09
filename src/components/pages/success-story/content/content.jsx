import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Facts from '../facts';

import styles from './content.module.scss';
import 'components/lazy-blocks/personal-card/personal-card.scss';

const cx = classNames.bind(styles);

const Content = ({ content, acf: { facts } }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={cx('info-wrapper')}>
        <Facts {...facts} />
      </div>
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    facts: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Content;
