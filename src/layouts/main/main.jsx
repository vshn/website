import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import Overlay from 'components/shared/overlay';
import SEO from 'components/shared/seo';

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

export default MainLayout;
