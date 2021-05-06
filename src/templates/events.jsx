/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import EventsList from 'components/pages/events/events-list';
import backgroundImage from 'components/pages/events/hero/images/background-image.svg';
import UpcomingEvents from 'components/pages/events/upcoming-events';
import Contact from 'components/shared/contact';
import Hero from 'components/shared/hero';
import t from 'i18n';
import MainLayout from 'layouts/main';

const Events = ({
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
  const shouldShowUpcoming = pageYear === availableYears[0];

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
      locale={locale}
      seo={data.seo}
      pageUrls={pageUrls}
      menus={menus}
      globalFields={globalFields}
    >
      <Hero
        breadcrumbs={breadcrumbs}
        title={data.title}
        pageTitle={data.title}
        backgroundImage={backgroundImage}
      />
      {shouldShowUpcoming && upcomingEvents.length === 3 && (
        <UpcomingEvents
          title={data.acf.upcomingEvents.title}
          upcomingEvents={upcomingEvents}
        />
      )}
      <EventsList
        years={availableYears}
        events={events}
        rootPath={data.uri}
        pageYear={pageYear}
      />
      <Contact locale={locale} />
    </MainLayout>
  );
};

export default Events;
