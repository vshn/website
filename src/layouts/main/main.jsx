import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from 'components/shared/seo';
import Header from 'components/shared/header';
import Footer from 'components/shared/footer';
import Overlay from 'components/shared/overlay';
import MobileMenu from 'components/shared/mobile-menu';

const MainLayout = ({ seo, children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(true);
  const handleOverlayClick = () => setIsMobileMenuOpen(false);
  const handleMobileNavCloseButtonClick = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // documentElement = html
      document.documentElement.style.cssText = 'overflow: hidden';
      // Position fixed here is to prevent scrolling on iOS
      document.body.style.cssText = 'position: fixed; width: 100%';
    } else {
      // documentElement = html
      document.documentElement.style.cssText = '';
      document.body.style.cssText = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <SEO {...seo} />
      <Header onBurgerClick={handleHeaderBurgerClick} />
      <main>{children}</main>
      <Footer />
      <Overlay isVisible={isMobileMenuOpen} onClick={handleOverlayClick} />
      <MobileMenu isOpen={isMobileMenuOpen} onCloseButtonClick={handleMobileNavCloseButtonClick} />
    </>
  );
};

MainLayout.propTypes = {
  seo: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  seo: {},
};

export const query = graphql`
  fragment wpPageSeo on WpPage {
    seo {
      title
      metaDesc
      metaKeywords
      opengraphDescription
      opengraphTitle
      opengraphUrl
      opengraphImage {
        localFile {
          childImageSharp {
            fixed(toFormat: JPG, width: 1200, height: 630) {
              src
            }
          }
        }
      }
      canonical
      twitterTitle
      twitterDescription
      twitterImage {
        localFile {
          childImageSharp {
            fixed(toFormat: JPG, width: 1024, height: 512) {
              src
            }
          }
        }
      }
    }
  }
  fragment wpPostSeo on WpPost {
    seo {
      title
      metaDesc
      metaKeywords
      opengraphDescription
      opengraphTitle
      opengraphUrl
      opengraphImage {
        localFile {
          childImageSharp {
            fixed(toFormat: JPG, width: 1200, height: 630) {
              src
            }
          }
        }
      }
      canonical
      twitterTitle
      twitterDescription
      twitterImage {
        localFile {
          childImageSharp {
            fixed(toFormat: JPG, width: 1024, height: 512) {
              src
            }
          }
        }
      }
    }
  }
`;

export default MainLayout;
