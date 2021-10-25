import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import Overlay from 'components/shared/overlay';
import SEO from 'components/shared/seo';

const MainLayout = (props) => {
  const {
    seo,
    children,
    pageUrls,
    locale,
    menus: {
      mainMenuItems,
      topMenuItems,
      mobileMenuItems,
      footerMenuItems,
    },
    globalFields: {
      socialLinks,
      footerMeta,
    },
  } = props;
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
      {seo && <SEO {...seo} locale={locale} />}
      <Header
        pageUrls={pageUrls}
        locale={locale}
        menuItems={mainMenuItems}
        topMenuItems={topMenuItems}
        onBurgerClick={handleHeaderBurgerClick}
      />
      <main>{children}</main>
      <Footer menuItems={footerMenuItems} socialLinks={socialLinks} footerMeta={footerMeta} />
      <Overlay isVisible={isMobileMenuOpen} onClick={handleOverlayClick} />
      <MobileMenu
        pageUrls={pageUrls}
        topMenuItems={topMenuItems}
        isOpen={isMobileMenuOpen}
        menuItems={mobileMenuItems}
        locale={locale}
        onCloseButtonClick={handleMobileNavCloseButtonClick}
      />
    </>
  );
};

MainLayout.propTypes = {
  seo: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  pageUrls: PropTypes.shape().isRequired,
  menus: PropTypes.shape({
    topMenuItems: PropTypes.arrayOf(PropTypes.shape({})),
    mainMenuItems: PropTypes.arrayOf(PropTypes.shape({})),
    mobileMenuItems: PropTypes.arrayOf(PropTypes.shape({})),
    footerMenuItems: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  globalFields: PropTypes.shape({
    socialLinks: PropTypes.shape({}),
    footerMeta: PropTypes.shape({}),
  }),
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

MainLayout.defaultProps = {
  seo: null,
  menus: {
    mainMenuItems: [],
    mobileMenuItems: [],
    topMenuItems: [],
    footerMenuItems: [],
  },
  globalFields: {
    socialLinks: undefined,
    globalFields: undefined,
  },
};

export const query = graphql`
  fragment wpPageSeo on WpPage {
    seo {
      title
      metaDesc
      metaKeywords
      metaRobotsNoindex
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
  fragment wpSuccessStorySeo on WpSuccessStory {
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
  fragment wpPartnerSeo on WpPartner {
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
  fragment wpJobSeo on WpJob {
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
