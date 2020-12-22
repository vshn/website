import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import styles from './typewritter.module.scss';

const cx = classNames.bind(styles);

const DELETING_SPEED = 30;
const TYPING_SPEED = 150;

const Typewritter = ({ messages }) => {
  const [animationState, setAnimationState] = useState({
    text: '',
    message: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPING_SPEED,
  });

  const getCurrentText = (currentState) => (currentState.isDeleting
    ? currentState.message.substring(0, currentState.text.length - 1)
    : currentState.message.substring(0, currentState.text.length + 1));

  // eslint-disable-next-line max-len
  const getMessage = (currentState, data) => data[Number(currentState.loopNum) % Number(data.length)];

  const getTypingSpeed = (currentState) => (currentState.isDeleting
    ? TYPING_SPEED
    : DELETING_SPEED);

  useEffect(() => {
    let timer = '';
    const handleType = () => {
      setAnimationState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      clearTimeout(timer);
      timer = setTimeout(handleType, animationState.typingSpeed);
    };
    handleType();
    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationState.isDeleting]);

  useEffect(() => {
    if (!animationState.isDeleting && animationState.text === animationState.message) {
      setTimeout(() => {
        setAnimationState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, 500);
    } else if (animationState.isDeleting && animationState.text === '') {
      setTimeout(() => {
        setAnimationState((cs) => ({
          ...cs, // cs means currentState
          isDeleting: false,
          loopNum: cs.loopNum + 1,
          message: getMessage(cs, messages),
        }));
      }, 300);
    }
  }, [animationState.text, animationState.message, animationState.isDeleting, messages]);

  return (
    <div className={cx('wrapper')}>
      <span>{animationState.text}</span>
      <span className={cx('cursor')} />
    </div>
  );
};

Typewritter.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
};

Typewritter.defaultProps = {
  messages: [],
};

export default Typewritter;
