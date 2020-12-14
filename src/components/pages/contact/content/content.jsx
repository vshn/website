import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Form from 'components/shared/form';

import ContactInfo from './contact-info';
import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ formId, contactInfo }) => (
  <section className={cx('wrapper')}>
    <div className={cx('form-wrapper')}>
      <Form formId={formId} />
    </div>
    <div className="container">
      <ContactInfo {...contactInfo} />
    </div>
  </section>
);

Content.propTypes = {
  formId: PropTypes.string.isRequired,
  contactInfo: PropTypes.shape({}).isRequired,
};

export default Content;
