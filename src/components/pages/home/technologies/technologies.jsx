import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import Item from './item';

import rancherLogo from './images/rancher.svg';
import kubernatesLogo from './images/kubernates.svg';
import ansibleLogo from './images/ansible.svg';
import openshiftLogo from './images/openshift.svg';
import dockerLogo from './images/docker.svg';
import puppetLogo from './images/puppet.svg';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

import styles from './technologies.module.scss';

const cx = classNames.bind(styles);

const items = [
  {
    name: 'Rancher',
    logo: rancherLogo,
  },
  {
    name: 'Kubernates',
    logo: kubernatesLogo,
  },
  {
    name: 'Ansible',
    logo: ansibleLogo,
  },
  {
    name: 'Openshift',
    logo: openshiftLogo,
  },
  {
    name: 'Docker',
    logo: dockerLogo,
  },
  {
    name: 'Puppet',
    logo: puppetLogo,
  },
];

const itemsWrapperAnimationVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const Technologies = ({ title, description, text, buttonText, buttonUrl }) => {
  const [animationStartRef, isAnimationStarted] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h2" size="sm" color="secondary">
            {title}
          </Heading>
          <Heading
            className={cx('description')}
            tag="p"
            size="xl"
            innerHTML={description}
          />
          <p className={cx('text')}>{text}</p>
          <Button to={buttonUrl}>{buttonText}</Button>
        </div>

        <div className={cx('items-wrapper')} ref={animationStartRef}>
          <motion.ul
            className={cx('items-inner')}
            variants={itemsWrapperAnimationVariants}
            animate={isAnimationStarted ? 'animate' : 'initial'}
          >
            {items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </motion.ul>
          <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />
        </div>

        <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />
      </div>
    </section>
  );
};

Technologies.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Technologies;
