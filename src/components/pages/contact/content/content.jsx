import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Form from 'components/shared/form';

import ContactInfo from './contact-info';
import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ form, locale, contactInfo }) => (
  <section className={cx('wrapper')}>
    <div className={cx('form-wrapper')}>
      <Form {...form} locale={locale} />
    </div>
    <div className="container">
      <ContactInfo {...contactInfo} />
    </div>
  </section>
);

Content.propTypes = {
  form: PropTypes.shape({
    formId: PropTypes.string.isRequired,
  }).isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
  contactInfo: PropTypes.shape({}).isRequired,
};

export default Content;
