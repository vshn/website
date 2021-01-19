import React from 'react';

import Content from 'components/pages/404/content';
import MainLayout from 'layouts/main';

export default ({ pageContext: { locale, pageUrls, menus, globalFields } }) => {
  const content = {
    title: 'Oops! Error page 404',
    description: 'The page you requested could not be found',
    buttonText: 'Back to Home',
  };
  return (
    <MainLayout locale={locale} pageUrls={pageUrls} menus={menus} globalFields={globalFields}>
      <Content {...content} />
    </MainLayout>
  );
};
