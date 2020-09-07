import React from 'react';
import PropTypes from 'prop-types';

import SEO from 'components/shared/seo';
import Header from 'components/shared/header';

const MainLayout = ({ seo, children }) => (
  <>
    <SEO {...seo} />
    <Header />
    <main>{children}</main>
  </>
);

MainLayout.defaultProps = {
  seo: {},
};

MainLayout.propTypes = {
  seo: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

export default MainLayout;
