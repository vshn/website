import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Form from 'components/shared/form';

import styles from './content.module.scss';

import 'components/lazy-blocks/image-columns/image-columns.scss';

const cx = classNames.bind(styles);

const Content = ({ content, formId }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
      <Form formId={formId} />
    </div>
  </section>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
};

export default Content;
