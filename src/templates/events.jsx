/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';

import EventsList from 'components/pages/events/events-list';
import backgroundImage from 'components/pages/events/hero/images/background-image.svg';
import UpcomingEvents from 'components/pages/events/upcoming-events';
import Contact from 'components/shared/contact';
import Hero from 'components/shared/hero';
import t from 'i18n';
import MainLayout from 'layouts/main';

export default ({
  pageContext: {
    locale,
    pageUrls,
    menus,
    globalFields,
    eventsGroupedByYears,
    availableYears,
    data,
    pageYear,
  },
}) => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const events = eventsGroupedByYears[pageYear];

  useEffect(() => {
    setUpcomingEvents(
      eventsGroupedByYears[availableYears[0]]
        .filter((cEvent) => new Date(cEvent.acf.schedule.startDate) > new Date())
        .slice(0, 3),
    );
  }, [eventsGroupedByYears, availableYears]);

  const breadcrumbs = [t[locale].breadcrumbs.learn];

  return (
    <MainLayout
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero
        breadcrumbs={breadcrumbs}
        title={data.title}
        subtitle={data.title}
        backgroundImage={backgroundImage}
      />
      {upcomingEvents.length === 3 && (
        <UpcomingEvents
          title={data.acf.upcomingEvents.title}
          upcomingEvents={upcomingEvents}
        />
      )}
      <EventsList
        years={availableYears}
        activeYear={2020}
        events={events}
        rootPath={data.uri}
      />
      <Contact locale={locale} />
    </MainLayout>
  );
};
