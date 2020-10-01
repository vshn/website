import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Confetti = ({ showAnimate }) => {
  const animationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    appear: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.49, 0.33, 1],
      },
    },
  };
  const containerAnimationVariants = {
    initial: {},
    appear: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <motion.svg variants={containerAnimationVariants} animate={showAnimate ? 'appear' : 'initial'} width="370" height="226" viewBox="0 0 370 226" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle initial="initial" variants={animationVariants} cx="41" cy="5" r="5" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="299" cy="112" r="3" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="105" cy="207" r="3" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="9" cy="83" r="3" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="67" cy="187" r="3" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="353" cy="20" r="4" stroke="#4CC3FF" stroke-width="2" />
      <motion.circle initial="initial" variants={animationVariants} cx="276" cy="194" r="4" stroke="#4CC3FF" stroke-width="2" />
      <motion.circle initial="initial" variants={animationVariants} cx="108" cy="12" r="4" stroke="#4CC3FF" stroke-width="2" />
      <motion.circle initial="initial" variants={animationVariants} cx="77" cy="155" r="4" stroke="#4CC3FF" stroke-width="2" />
      <motion.circle initial="initial" variants={animationVariants} cx="26" cy="37" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="295" cy="57" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="41" cy="148" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="344" cy="132" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="291" cy="158" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="266" cy="18" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="79" cy="35" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="2" cy="13" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="41" cy="224" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="319" cy="211" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="368" cy="109" r="2" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="296" cy="12" r="5" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="19" cy="177" r="5" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="324" cy="172" r="5" fill="#4CC3FF" />
      <motion.circle initial="initial" variants={animationVariants} cx="41" cy="70" r="5" fill="#4CC3FF" />
      <motion.path
        initial="initial"
        variants={animationVariants}
        d="M46.7647 107C54.0744 107 60 112.926 60 120.235C60 121.21 59.2099 122 58.2353 122L47 122C45.8954 122 45 121.105 45 120L45 108.765C45 107.79 45.7901 107 46.7647 107Z"
        fill="#4CC3FF"
      />
      <motion.path
        initial="initial"
        variants={animationVariants}
        d="M329.765 70C337.074 70 343 75.9256 343 83.2353C343 84.2099 342.21 85 341.235 85L330 85C328.895 85 328 84.1046 328 83L328 71.7647C328 70.7901 328.79 70 329.765 70Z"
        fill="#4CC3FF"
      />
      <motion.rect initial="initial" variants={animationVariants} x="359" y="155" width="3" height="15" fill="#4CC3FF" />
    </motion.svg>
  );
};

Confetti.propTypes = {
  showAnimate: PropTypes.bool.isRequired,
};

export default Confetti;
