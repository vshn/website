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
    upcomingEvents,
  },
  pageContext: {
    locale,
    pageUrls,
    menus,
    globalFields,
    year,
    eventsGroupedByYears,
  },
}) => (
  <MainLayout
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={data.title} locale={locale} />
    <UpcomingEvents title={data.acf.upcomingEvents.title} {...upcomingEvents} />
    <EventsList activeYear={year} rootPath={data.uri} eventsGroupedByYears={eventsGroupedByYears} />
    <Contact locale={locale} />
  </MainLayout>
);
export const query = graphql`
  query($id: String!, $locale: String!) {
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
    upcomingEvents: allWpEvent(
      filter: {
        language: { slug: { eq: $locale } }
      },
      limit: 3, 
      sort: {order: DESC, fields: acf___schedule___startDate}) {
      items: nodes {
        url: uri
        title
        item: acf {
          logo {
            localFile {
              publicURL
            }
          }
          description
          schedule {
            startDate
          }
        }
      }
    }
  }
`;
