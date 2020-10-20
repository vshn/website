import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import Item from './item';

import rancher from './images/rancher.svg';
import kubernates from './images/kubernates.svg';
import ansible from './images/ansible.svg';
import openshift from './images/openshift.svg';
import docker from './images/docker.svg';
import puppet from './images/puppet.svg';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

import styles from './technologies.module.scss';

const cx = classNames.bind(styles);

const items = [
  {
    name: 'Rancher',
    logo: rancher,
  },
  {
    name: 'Kubernates',
    logo: kubernates,
  },
  {
    name: 'Ansible',
    logo: ansible,
  },
  {
    name: 'Openshift',
    logo: openshift,
  },
  {
    name: 'Docker',
    logo: docker,
  },
  {
    name: 'Puppet',
    logo: puppet,
  },
];

const Technologies = ({ title, subtitle, text, buttonText, buttonLink: { url: buttonUrl } }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('content')}>
        <Heading className={cx('title')} tag="h2" size="sm" color="secondary">
          {title}
        </Heading>
        <Heading
          className={cx('subtitle')}
          tag="p"
          size="xl"
          innerHTML={subtitle}
        />
        <p className={cx('text')}>{text}</p>
        <Button to={buttonUrl}>{buttonText}</Button>
      </div>

      <div className={cx('items-wrapper')}>
        <ul className={cx('items-inner')}>
          {items.map((item, index) => <Item {...item} key={index} />)}
        </ul>
        <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />
      </div>

      <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />
    </div>
  </section>
);

Technologies.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Technologies;
