import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './awards.module.scss';
import DigitalEconomyAward from './images/digital-economy-award.svg';
import ISGProviderLens from './images/isg-provider-lens.svg';
import KubernetesCertifiedServiceProvider from './images/kubernetes-certified-service-provider.svg';
import stripes from './images/stripes.svg';
import Item from './item';

const cx = classNames.bind(styles);

const itemImages = {
  digitalEconomyAward: DigitalEconomyAward,
  kubernetesCertifiedServiceProvider: KubernetesCertifiedServiceProvider,
  isgProviderLens: ISGProviderLens,
};

const Awards = ({ title, items, itemFooterText }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('title')} tag="h2" size="xl" color="tertiary">{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item
            itemFooterText={itemFooterText}
            itemImages={itemImages}
            {...item}
            key={index}
          />
        ))}
      </ul>
    </div>
    <img className={cx('stripes')} src={stripes} alt="" aria-hidden />
  </section>
);
Awards.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default Awards;
