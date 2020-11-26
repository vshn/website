/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import EventsList from 'components/pages/events/events-list';
import Hero from 'components/pages/events/hero';
import UpcomingEvents from 'components/pages/events/upcoming-events';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

export default ({
  data: {
    wpPage: data,
  },
  pageContext: {
    locale,
    pageUrls,
    menus,
    globalFields,
    year,
    eventsGroupedByYears,
  },
}) => {
  const years = Object.keys(eventsGroupedByYears).sort((a, b) => b - a);
  const upcomingEvents = eventsGroupedByYears[years[0]].slice(0, 3).reverse();
  return (
    <MainLayout
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero title={data.title} locale={locale} />
      <UpcomingEvents
        title={data.acf.upcomingEvents.title}
        items={upcomingEvents}
      />
      <EventsList
        years={years}
        activeYear={year}
        rootPath={data.uri}
        eventsGroupedByYears={eventsGroupedByYears}
      />
      <Contact locale={locale} />
    </MainLayout>
  );
};
export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      uri
      acf {
        upcomingEvents {
          title
        }
      }
      ...wpPageSeo 
    }  
  }
`;
