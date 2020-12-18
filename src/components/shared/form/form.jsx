import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';

import Heading from 'components/shared/heading';

import styles from './form.module.scss';

const cx = classNames.bind(styles);

const PORTAL_ID = '7105834';
const FORM_JS_SRC = 'https://js.hsforms.net/forms/v2.js';

const Form = ({ formId, title }) => {
  const [sectionRef, inView] = useInView({ triggerOnce: true });

  const handleOnLoad = () => {
    hbspt.forms.create({
      portalId: PORTAL_ID,
      formId,
      target: '#form-container',
    });
  };
  const handleScriptInject = ({ scriptTags: existTags }, { scriptTags }) => {
    if (scriptTags) {
      // If script just has been added
      const addedScriptTag = scriptTags[0];
      addedScriptTag.onload = handleOnLoad;
    } else {
      // If script already exist
      const hasScript = existTags.some((script) => script.src === FORM_JS_SRC);
      if (hasScript) {
        handleOnLoad();
      }
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
        script={[{ src: FORM_JS_SRC }]}
        // Helmet doesn't support `onload` in script objects so we have to hack in our own
        onChangeClientState={(newState, addedTags) => handleScriptInject(newState, addedTags)}
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
