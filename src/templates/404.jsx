import React from 'react';

import MainLayout from 'layouts/main';

export default ({
  pageContext: {
    locale,
    pageUrls,
    topMenuItems,
    menuItems,
    mobileMenuItems,
    footerMenuItems,
  },
}) => {
  const content = {
    en: {
      title: 'NOT FOUND',
      description: 'You just hit a route that doesn\'t exist...',
    },
    de: {
      title: 'NICHT GEFUNDEN',
      description: 'Sie haben gerade eine Route getroffen, die es nicht gibt',
    },
  };
  return (
    <MainLayout
      pageUrls={pageUrls}
      menuItems={menuItems}
      topMenuItems={topMenuItems}
      mobileMenuItems={mobileMenuItems}
      footerMenuItems={footerMenuItems}
    >
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '260px', paddingBottom: '260px' }}>
        <h1>{content[locale].title}</h1>
        <p>{content[locale].description}</p>
      </div>
    </MainLayout>
  );
};
