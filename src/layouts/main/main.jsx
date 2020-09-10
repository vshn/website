import React from 'react';
import PropTypes from 'prop-types';

import SEO from 'components/shared/seo';
import Header from 'components/shared/header';
import Footer from 'components/shared/footer';

const MainLayout = ({ seo, children }) => (
  <>
    <SEO {...seo} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

MainLayout.propTypes = {
  seo: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  seo: {},
};

export default MainLayout;
