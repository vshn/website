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
  const [featuredUpcomingEvents, setFeaturedUpcomingEvents] = useState([]);
  const [upcomingEventsByYear, setUpcomingEventsByYear] = useState({});
  const [pastEvents, setPastEvents] = useState([]);
  const currentYear = new Date().getFullYear();
  const shouldShowUpcoming = pageYear >= currentYear;

  useEffect(() => {
    const upcomingYears = Object.keys(eventsGroupedByYears)
      .filter((key) => parseInt(key, 10) >= currentYear);

    const getUpcomingEvents = (year) => {
      let events = eventsGroupedByYears[year];
      if (parseInt(year, 10) === currentYear) {
        events = events
          .filter((cEvent) => new Date(cEvent.acf.schedule.startDate) >= new Date());
      }
      const upcomingEvents = [...events].reverse();
      return upcomingEvents;
    };

    // Get featured events
    let upcomingEvents = [];
    upcomingYears.forEach((year) => {
      const events = getUpcomingEvents(year);
      upcomingEvents = upcomingEvents.concat(events);
    });
    const featuredUpcomingEvents = upcomingEvents.slice(0, 3);
    setFeaturedUpcomingEvents(featuredUpcomingEvents);

    // Get the rest of events, excluding the featured events
    const upcomingEventsByYear = {};
    upcomingYears.forEach((year) => {
      let events = getUpcomingEvents(year);
      events = events.filter((cEvent, i) => cEvent !== featuredUpcomingEvents[i]);
      upcomingEventsByYear[year] = events;
    });
    setUpcomingEventsByYear(upcomingEventsByYear);

    // Get the past events
    setPastEvents(
      eventsGroupedByYears[pageYear]
        .filter((cEvent) => new Date(cEvent.acf.schedule.startDate) < new Date()),
    );
  }, [currentYear, eventsGroupedByYears, pageYear]);

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
      {shouldShowUpcoming && featuredUpcomingEvents.length > 0 && (
        <UpcomingEvents
          title={data.acf.upcomingEvents.title}
          featuredUpcomingEvents={featuredUpcomingEvents}
          upcomingEventsByYear={upcomingEventsByYear}
        />
      )}
      <EventsList
        years={availableYears}
        events={pastEvents}
        rootPath={data.uri}
        pageYear={pageYear}
      />
      <Contact locale={locale} />
    </MainLayout>
  );
};

export default Events;
