/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React from 'react';

import EventsList from 'components/pages/events/events-list';
import Hero from 'components/pages/events/hero';
import UpcomingEvents from 'components/pages/events/upcoming-events';
import Contact from 'components/shared/contact';
import MainLayout from 'layouts/main';

const hero = {
  category: 'Learn',
  title: 'Events',
};

const upcomingEvents = {
  title: 'Upcoming Events',
  items: [
    {
      url: '/',
      title: 'DINAcon 2020',
      description: 'Project Syn is nominated for the DINAcon Award',
      date: new Date('2020-10-23'),
    },
    {
      url: '/',
      title: 'Cloud Native Meetup Bern',
      description: 'Tobias Brunner talks about Project Syn',
      date: new Date('2020-10-29'),
    },
    {
      url: '/',
      title: 'First NGINX Meetup Zurich',
      description: 'Adrian Kosmaczewski is moderating',
      date: new Date('2020-11-04'),
    },
  ],
};

export default ({
  data: {
    wpPage: { seo, acf: data, title },
  },
  pageContext: { locale, pageUrls, menus, globalFields },
}) => (
  <MainLayout
    seo={seo}
    pageUrls={pageUrls}
    menus={menus}
    globalFields={globalFields}
  >
    <Hero {...hero} />
    <UpcomingEvents {...upcomingEvents} />
    <EventsList />
    <Contact locale={locale} />
  </MainLayout>
);

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
    }
  }
`;
