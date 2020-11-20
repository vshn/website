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
    allWpEvent,
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={data.seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero title={data.title} locale={locale} />
    <UpcomingEvents title={data.acf.upcomingEvents.title} {...allWpEvent} />
    <EventsList />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      acf {
        upcomingEvents {
          title
        }
      }
      ...wpPageSeo 
    }
    allWpEvent(limit: 3, sort: {order: ASC, fields: acf___schedule___startDate}) {
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
