import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Heading from 'components/shared/heading';

import RatingCards from '../rating-cards';

import styles from './content.module.scss';

import 'components/lazy-blocks/rating-cards/rating-cards.scss';

const cx = classNames.bind(styles);

const Content = ({ content, ratingCards, ratingCards2 }) => {
  useEffect(() => {
    const rtscript = document.createElement('script');
    rtscript.type = 'text/javascript';
    rtscript.onload = () => {
      if (window.RTWidget) {
        const { RTWidget } = window;
        window.widget = new RTWidget({
          companies: [74931],
          detailsMode: 'recruitee',
          language: 'en',
          departmentsFilter: [],
          themeVars: {
            primary: '#1999e3',
            secondary: '#000',
            text: '#5c6f78',
            textDark: '#37474f',
            fontFamily: '"Montserrat", sans-serif',
            baseFontSize: '16px',
          },
          flags: {
            showLocation: true,
            showCountry: true,
            showCity: true,
            groupByLocation: false,
            groupByDepartment: true,
            groupByCompany: false,
          },
        });
      }
    };
    rtscript.src = 'https://d10zminp1cyta8.cloudfront.net/widget.js';
    document.body.appendChild(rtscript);
  }, []);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <Heading className={cx('title')} tag="h2" size="xl">Open positions</Heading>
        <div className={cx('recruitee')} id="recruitee-careers" />
        <div className={cx('content')} dangerouslySetInnerHTML={{ __html: content }} />
        <RatingCards {...ratingCards} />
        <RatingCards {...ratingCards2} />
      </div>

    </section>
  );
};

Content.propTypes = {
  content: PropTypes.string.isRequired,
  ratingCards: PropTypes.objectOf(PropTypes.any).isRequired,
  ratingCards2: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Content;
