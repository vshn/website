import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import motionFadeAnimation from 'constants/motion-fade-animation';
import useAutoChangeableIndex from 'hooks/use-auto-changeable-index';
import Quote from 'icons/quote.inline.svg';

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

  // eslint-disable-next-line react/prop-types
  const Title = ({ className }) => (
    <Heading className={cx('title', className)} tag="h2" size="sm" color="secondary">{title}</Heading>
  );

  // eslint-disable-next-line react/prop-types
  const Tabs = ({ className }) => (
    <div className={cx('tabs-wrapper', className)}>
      {items.map((item, index) => {
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
            key={index}
            onClick={handleClick}
          >
            {number}
          </Heading>
        );
      })}
    </div>
  );

  const photos = [
    michaelSchmid,
    silvanMuhlemann,
    mathiasBrenner,
  ];

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')} ref={animationStartRef}>
        <Title className={cx('sm-visible')} />

        <div className={cx('details')}>
          <div className={cx('photo-wrapper')}>
            <AnimatePresence exitBeforeEnter>
              {items.map((item, index) => {
                const isActive = index === activeItemIndex;
                if (!isActive) return null;

                return (
                  <motion.div {...motionFadeAnimation} key={index}>
                    <GatsbyImage className={cx('photo')} fluid={photos[index]} />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
            <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
            <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
          </div>

          <div>
            <Title className={cx('md-visible', 'sm-hidden')} />
            <AnimatePresence exitBeforeEnter>
              {items.map(({ name, position }, index) => {
                const isActive = index === activeItemIndex;
                if (!isActive) return null;

                return (
                  <motion.div {...motionFadeAnimation} key={index}>
                    <Heading className={cx('name')} tag="h3" size="lg">{name}</Heading>
                    <span className={cx('position')}>{position}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <Tabs className={cx('sm-hidden')} />
          </div>
        </div>

        <div className={cx('content')}>
          <Title className={cx('md-hidden')} />
          <Quote className={cx('quote-icon')} aria-hidden />
          <AnimatePresence exitBeforeEnter>
            {items.map(({ text, buttonUrl }, index) => {
              const isActive = index === activeItemIndex;
              if (!isActive) return null;

              return (
                <motion.div {...motionFadeAnimation} key={index}>
                  <Heading className={cx('text')} tag="blockquote" size="xl" innerHTML={text} />
                  <Button to={buttonUrl}>Continue</Button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <Tabs className={cx('sm-visible')} />

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
