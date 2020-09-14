import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import GatsbyImage from 'gatsby-image';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';
import Quote from 'icons/quote.inline.svg';
import useAutoChangeableIndex from 'hooks/use-auto-changeable-index';

import shape from './images/shape.svg';
import styles from './partners.module.scss';

const cx = classNames.bind(styles);

export const ITEM_CHANGE_INTERVAL = 5000; // milliseconds

const Partners = ({ title, items }) => {
  const [animationStartRef, isAnimationStarted] = useInView({
    triggerOnce: true,
  });

  const [activeItemIndex, startAnimation, restartAnimation] = useAutoChangeableIndex(
    items.length,
    { interval: ITEM_CHANGE_INTERVAL },
  );

  const {
    michaelSchmid: {
      childImageSharp: { fluid: michaelSchmid },
    },
    silvanMuhlemann: {
      childImageSharp: { fluid: silvanMuhlemann },
    },
    mathiasBrenner: {
      childImageSharp: { fluid: mathiasBrenner },
    },
  } = useStaticQuery(graphql`
    {
      michaelSchmid: file(relativePath: { eq: "pages/home/partners/michael-schmid.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      silvanMuhlemann: file(relativePath: { eq: "pages/home/partners/silvan-muhlemann.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mathiasBrenner: file(relativePath: { eq: "pages/home/partners/mathias-brenner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (isAnimationStarted) startAnimation();
  }, [startAnimation, isAnimationStarted]);

  const photos = [
    michaelSchmid,
    silvanMuhlemann,
    mathiasBrenner,
  ];

  const activePhoto = photos[activeItemIndex];
  const activeName = items[activeItemIndex].name;
  const activePosition = items[activeItemIndex].position;
  const activeText = items[activeItemIndex].text;
  const activeButtonUrl = items[activeItemIndex].buttonUrl;

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')} ref={animationStartRef}>
        <div className={cx('details')}>
          <div className={cx('photo-wrapper')}>
            <GatsbyImage className={cx('photo')} fluid={activePhoto} />

            <span className={cx('rectangle-1')} aria-hidden />
            <span className={cx('rectangle-2')} aria-hidden />
            <span className={cx('rectangle-3')} aria-hidden />
          </div>

          <Heading className={cx('name')} tag="h3" size="lg">{activeName}</Heading>
          <span className={cx('position')}>{activePosition}</span>

          <div className={cx('tabs-wrapper')}>
            {
              items.map((item, index) => {
                const number = index + 1;
                const isActive = index === activeItemIndex;

                const handleClick = () => restartAnimation(index);

                return (
                  <Heading
                    className={cx('tab', { active: isActive, animationStarted: isAnimationStarted })}
                    tag="button"
                    size="lg"
                    color="quaternary"
                    type="button"
                    onClick={handleClick}
                    key={index}
                  >
                    {number}
                  </Heading>
                );
              })
            }
          </div>
        </div>

        <div>
          <Heading className={cx('title')} tag="h2" size="sm" color="secondary">{title}</Heading>
          <Quote className={cx('quote-icon')} aria-hidden />
          <Heading className={cx('text')} tag="blockquote" size="xl" innerHTML={activeText} />
          <Button to={activeButtonUrl}>Continue</Button>
        </div>

        <img className={cx('shape')} src={shape} alt="" aria-hidden />
      </div>
    </section>
  );
};

Partners.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Partners;
