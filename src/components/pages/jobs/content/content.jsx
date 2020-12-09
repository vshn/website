import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Form from 'components/shared/form';

import styles from './content.module.scss';
import OpenPositions from './open-positions';

import 'components/lazy-blocks/rating-cards/rating-cards.scss';

const cx = classNames.bind(styles);

const Content = ({ title, positions, content, form, locale }) => (

  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <OpenPositions title={title} {...positions} />
      <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
    </div>

    <Form {...form} locale={locale} />
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  positions: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  form: PropTypes.shape({
    title: PropTypes.string.isRequired,
    formId: PropTypes.string.isRequired,
  }).isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

export default Content;
