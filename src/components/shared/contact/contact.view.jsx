import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';
import getTextWithoutParagraph from 'utils/get-text-without-paragraph';

import illustration from './images/illustration.svg';

import styles from './contact.module.scss';

const cx = classNames.bind(styles);

const Contact = ({ title, description, buttonText, buttonUrl }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('title')} tag="h2" size="xl" innerHTML={getTextWithoutParagraph(title)} />
      <p className={cx('description')}>{description}</p>
      <Button to={buttonUrl}>{buttonText}</Button>
    </div>

    <img className={cx('illustration')} src={illustration} alt="" aria-hidden />
  </section>
);

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Contact;
