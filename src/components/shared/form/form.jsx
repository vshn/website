import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';

import Heading from 'components/shared/heading';

import styles from './form.module.scss';

const cx = classNames.bind(styles);

const Form = ({ formId, title }) => {
  const [sectionRef, inView] = useInView({ triggerOnce: true });

  const handleOnLoad = () => {
    hbspt.forms.create({
      portalId: '7105834',
      formId,
      target: '#form-container'
    });
  };
  const handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      const scriptTag = scriptTags[0];
      scriptTag.onload = handleOnLoad;
    }
  };
  return (
    <>
      <div ref={sectionRef}>
        {title && <Heading className={cx('title')} tag="h3">{title}</Heading>}
        <div className={cx('form-container')} id="form-container" />
      </div>
      {inView && (
      <Helmet
        script={[{ src: 'https://js.hsforms.net/forms/v2.js' }]}
        // Helmet doesn't support `onload` in script objects so we have to hack in our own
        onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}
      />
      )}
    </>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  formId: PropTypes.string.isRequired,
};

Form.defaultProps = {
  title: null,
};

export default Form;
