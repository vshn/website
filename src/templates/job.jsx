/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useInView } from 'react-intersection-observer';

import Content from 'components/pages/job/content';
import Hero from 'components/pages/job/hero';
import Contact from 'components/shared/contact';
import translations from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpJob: data,
    positions,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => {
  const [sectionRef, inView] = useInView({ triggerOnce: true, rootMargin: '500px' });

  const handleOnLoad = () => {
    hbspt.forms.create({
      portalId: '7105834',
      formId: 'af9cccae-d6a8-4aad-8daa-dc207893b330',
      target: '#job-form-container',
      locale: 'en',
      inlineMessage: '',
      onFormSubmitted: () => {
        console.log('haha');
      },
    });
  };
  const handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      const scriptTag = scriptTags[0];
      scriptTag.onload = handleOnLoad;
    }
  };

  return (
    <MainLayout
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero title={data.title} locale={locale} />
      <Content
        content={data.content}
        title={translations[locale].job.openPositionsTitle}
        positions={positions}
      />
      <section ref={sectionRef}>
        <div className="container" id="job-form-container" />
      </section>
      {inView && (
        <Helmet
          script={[{ src: 'https://js.hsforms.net/forms/v2.js' }]}
        // Helmet doesn't support `onload` in script objects so we have to hack in our own
          onChangeClientState={(newState, addedTags) => handleScriptInject(addedTags)}
        />
      )}

    </MainLayout>
  );
};

export const query = graphql`
  query($id: String!, $locale: String!) {
    wpJob(id: { eq: $id }) {
      ...wpJobSeo
      title
      content
    }
    positions: allWpJob(
      filter: {language: {slug: {eq: $locale}}},
      sort: {order: ASC, fields: title}) {
      items: nodes {
        url: uri
        title
      }
    }
  }
`;
