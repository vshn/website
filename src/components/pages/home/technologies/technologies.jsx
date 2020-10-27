import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import ansibleLogo from './images/ansible.svg';
import dockerLogo from './images/docker.svg';
import kubernatesLogo from './images/kubernates.svg';
import openshiftLogo from './images/openshift.svg';
import puppetLogo from './images/puppet.svg';
import rancherLogo from './images/rancher.svg';
import shape from './images/shape.svg';
import Item from './item';
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

const Technologies = ({ title, subtitle, description, buttonText, buttonLink: { url: buttonUrl } }) => {
  const [animationStartRef, isAnimationStarted] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h2" size="xs" color="secondary">
            {title}
          </Heading>
          <Heading
            className={cx('description')}
            tag="p"
            size="xl"
            innerHTML={subtitle}
          />
          <p className={cx('text')}>{description}</p>
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
          <img className={cx('shape')} src={shape} alt="" aria-hidden />
        </div>

      </div>
    </section>
  );
};

Technologies.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Technologies;
