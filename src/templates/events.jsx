/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from "react";

import EventsList from "components/pages/events/events-list";
import backgroundImage from "components/pages/events/hero/images/background-image.svg";
import UpcomingEvents from "components/pages/events/upcoming-events";
import Contact from "components/shared/contact";
import Hero from "components/shared/hero";
import t from "i18n";
import MainLayout from "layouts/main";

const getUpcomingEvents = (eventsGroupedByYears, year, currentYear) => {
  let events = eventsGroupedByYears[year];
  if (parseInt(year, 10) === currentYear) {
    events = events.filter(
      (cEvent) => new Date(cEvent.acf.schedule.startDate) >= new Date()
    );
  }
  const upcomingEvents = [...events].reverse();
  return upcomingEvents;
};

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

  const upcomingYears = useMemo(
    () =>
      Object.keys(eventsGroupedByYears).filter(
        (key) => parseInt(key, 10) >= currentYear
      ),
    [eventsGroupedByYears, currentYear]
  );

  useEffect(() => {
    // Get featured events
    const upcomingEvents = upcomingYears
      .map((year) => getUpcomingEvents(eventsGroupedByYears, year, currentYear))
      .flatMap((event) => event);
    const featuredUpcomingEvents = upcomingEvents.slice(0, 3);
    setFeaturedUpcomingEvents(featuredUpcomingEvents);

    // Get the rest of events, excluding the featured events
    const upcomingEventsByYear = {};
    upcomingYears.forEach((year) => {
      let events = getUpcomingEvents(eventsGroupedByYears, year, currentYear);
      events = events.filter(
        (cEvent, i) => cEvent !== featuredUpcomingEvents[i]
      );
      upcomingEventsByYear[year] = events;
    });
    setUpcomingEventsByYear(upcomingEventsByYear);

    // Get the past events
    setPastEvents(
      eventsGroupedByYears[pageYear].filter(
        (cEvent) => new Date(cEvent.acf.schedule.startDate) < new Date()
      )
    );
  }, [eventsGroupedByYears, pageYear, upcomingYears, currentYear]);

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
      {shouldShowUpcoming && featuredUpcomingEvents.length && (
        <UpcomingEvents
          title={data.acf.upcomingEvents.title}
          itemFooterText={t[locale].upcomingEvents.itemFooterText}
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
