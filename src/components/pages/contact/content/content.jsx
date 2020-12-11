import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Form from 'components/shared/form';

import ContactInfo from './contact-info';
import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ form, contactInfo }) => (
  <section className={cx('wrapper')}>
    <div className={cx('form-wrapper')}>
      <Form {...form} />
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
  contactInfo: PropTypes.shape({}).isRequired,
};

export default Content;
