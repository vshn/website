import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import Overlay from 'components/shared/overlay';
import SEO from 'components/shared/seo';

const MainLayout = ({ seo, children, pageUrls }) => {
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
      {seo && <SEO {...seo} />}
      <Header pageUrls={pageUrls} onBurgerClick={handleHeaderBurgerClick} />
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
  pageUrls: PropTypes.shape().isRequired,
};

MainLayout.defaultProps = {
  seo: null,
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
