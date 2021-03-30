/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';

import Content from 'components/pages/404/content';
import MainLayout from 'layouts/main';

const ErrorPage = ({ pageContext: { locale, pageUrls, menus, globalFields } }) => {
  const content = {
    title: 'Oops! Error page 404',
    description: 'The page you requested could not be found',
    buttonText: 'Back to Home',
  };
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <MainLayout locale={locale} pageUrls={pageUrls} menus={menus} globalFields={globalFields}>
        <Content {...content} />
      </MainLayout>
    </>
  );
};

export default ErrorPage;
