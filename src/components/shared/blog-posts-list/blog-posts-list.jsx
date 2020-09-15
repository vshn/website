import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';

import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';

import Heading from 'components/shared/heading';
import Arrow from 'icons/arrow.inline.svg';
import Item from './item';

import styles from './blog-posts-list.module.scss';

const cx = classNames.bind(styles);

SwiperCore.use([Navigation, Pagination, A11y]);

const BlogPostsList = ({ className, title, items, shape }) => (
  <section className={cx('wrapper', className)}>
    <div className="container">
      <div className={cx('header')}>
        <Heading tag="h2" size="xl" innerHTML={title} />

        <div className={cx('buttons-wrapper')}>
          <button id="button-previous" className={cx('button')} type="button" aria-label="Previous slide">
            <Arrow className={cx('arrow', 'flipped')} />
          </button>
          <button id="button-next" className={cx('button')} type="button" aria-label="Next slide">
            <Arrow className={cx('arrow')} />
          </button>
        </div>
      </div>

      <Swiper
        className={cx('items-wrapper')}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={30}
        navigation={{
          prevEl: '#button-previous',
          nextEl: '#button-next',
        }}
        pagination={{
          bulletClass: cx('bullet'),
          bulletActiveClass: cx('active'),
          clickable: true,
        }}
        loop
        watchSlidesVisibility
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isVisible }) => <Item isVisible={isVisible} {...item} />}
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
    {shape}
  </section>
);

BlogPostsList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  shape: PropTypes.element,
};

BlogPostsList.defaultProps = {
  className: null,
  shape: null,
};

export default BlogPostsList;
