import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';

import Heading from 'components/shared/heading';
import Arrow from 'icons/arrow.inline.svg';

import styles from './blog-posts-carousel.module.scss';
import Item from './item';

const cx = classNames.bind(styles);

SwiperCore.use([Navigation, Pagination, A11y]);

const BlogPostsCarousel = ({ className, title, items, shape, itemFooterText }) => (
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
        navigation={{
          prevEl: '#button-previous',
          nextEl: '#button-next',
        }}
        pagination={{
          bulletClass: cx('bullet'),
          bulletActiveClass: cx('active'),
          clickable: true,
        }}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
        }}
        loop
        watchSlidesVisibility
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Item {...item} itemFooterText={itemFooterText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {shape}
  </section>
);

BlogPostsCarousel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    post: PropTypes.shape({
      uri: PropTypes.string.isRequired,
      categories: PropTypes.shape({
        nodes: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
        })),
      }).isRequired,
      title: PropTypes.string.isRequired,
      acf: PropTypes.shape({
        shortDescription: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  })).isRequired,
  itemFooterText: PropTypes.string.isRequired,
  shape: PropTypes.element,
};

BlogPostsCarousel.defaultProps = {
  className: null,
  shape: null,
};

export default BlogPostsCarousel;
